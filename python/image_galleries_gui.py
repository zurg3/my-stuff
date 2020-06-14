from tkinter import *
from tkinter import scrolledtext
from tkinter import filedialog
from tkinter import messagebox
import wget
import urllib.request
import urllib.error
import platform

program_name = 'Image galleries (GUI)'
program_version = 'v0.5.1'
program_author = 'zurg3 (Stepan Skryabin)'
tkinter_version = str(TkVersion)
python_version = str(platform.python_version())

root = Tk()

# root.iconbitmap(r'./img/app_icon.ico')

req_fields = LabelFrame(root, text='Required fields')
opt_fields = LabelFrame(root, text='Optional fields')
buttons = Frame(root)
output_box = LabelFrame(root, text='Output')

root.title(program_name + ' ' + program_version)
root.geometry('800x600')
# root.state('zoomed')

selected = IntVar()
selected_download_path = StringVar()


def load_gallery():
    file_formats = {
        1: '.jpg',
        2: '.jpeg',
        3: '.png',
        4: '.gif',
        5: '.webp'
    }

    base_link = str(base_link_input.get())
    max_images = int(max_images_input.get())
    file_format = int(selected.get())

    start_id = str(start_id_input.get())
    max_id_length = str(max_id_length_input.get())
    id_additional = str(id_additional_input.get())

    download_path = str(download_path_input.get())

    image_num = 1
    success_images = 0

    if start_id == '':
        start_id = 1
    else:
        start_id = int(start_id)
        max_images = start_id + (max_images - 1)

    max_images_progress = str(max_images)
    if max_id_length != '':
        for k in range(int(max_id_length) - len(str(max_images))):
            max_images_progress = '0' + max_images_progress

    for i in range(start_id, max_images + 1):
        id_to_string = str(i)

        if max_id_length != '':
            id_length = len(id_to_string)
            add_zero_count = int(max_id_length) - id_length
            for j in range(add_zero_count):
                id_to_string = '0' + id_to_string

        if id_additional != '':
            image_url = base_link + id_to_string + id_additional + file_formats[file_format]
        else:
            image_url = base_link + id_to_string + file_formats[file_format]

        progress = '[' + str(image_num) + '] [' + id_to_string + '/' + max_images_progress + '] '
        image_num = image_num + 1

        try:
            urllib.request.urlretrieve(image_url)
            output_text.insert(INSERT, progress + 'Downloading: ' + image_url + '\n')
            output_text.see('end')
            root.update()
            wget.download(image_url, download_path)
            success_images = success_images + 1
        except urllib.error.HTTPError:
            output_text.insert(INSERT, progress + 'Image not found: ' + image_url + '\n')
            output_text.see('end')
            root.update()
        except urllib.error.URLError:
            output_text.insert(INSERT, progress + 'Image not found: ' + image_url + '\n')
            output_text.see('end')
            root.update()

    end_output = '\nSuccessfully downloaded ' + str(success_images) + ' out of ' + str((image_num - 1)) + ' images.\n\n'
    output_text.insert(INSERT, end_output)
    output_text.see('end')
    root.update()


def select_download_path():
    global selected_download_path
    selected_download_path_get = filedialog.askdirectory()
    selected_download_path.set(selected_download_path_get)


def clear_output():
    output_text.delete('1.0', 'end')
    root.update()


def reset_fields():
    base_link_input.delete(0, 'end')
    max_images_input.delete(0, 'end')
    selected.set(None)

    start_id_input.delete(0, 'end')
    max_id_length_input.delete(0, 'end')
    id_additional_input.delete(0, 'end')

    download_path_input.delete(0, 'end')


def about_window():
    messagebox.showinfo(program_name + ' ' + program_version,
                        program_name + ' ' + program_version + '\n' +
                        'Author: ' + program_author + '\n\n' +
                        'Python version: ' + python_version + '\n' +
                        'Tkinter version: ' + tkinter_version)


def close():
    root.destroy()
    root.quit()


# =====
req_fields.pack(fill='both')
opt_fields.pack(fill='both')
buttons.pack(fill='both')
output_box.pack(fill='both')

# Labels
base_link_label = Label(req_fields, text='Base link', bg='white', fg='black', width=20, height=1)
max_images_label = Label(req_fields, text='Max images', bg='white', fg='black', width=20, height=1)
file_format_label = Label(req_fields, text='File format', bg='white', fg='black', width=20, height=1)

start_id_label = Label(opt_fields, text='Start ID', bg='white', fg='black', width=20, height=1)
max_id_length_label = Label(opt_fields, text='Max ID length', bg='white', fg='black', width=20, height=1)
id_additional_label = Label(opt_fields, text='Image ID additional text', bg='white', fg='black', width=20, height=1)

download_path_label = Label(buttons, text='Download path', bg='white', fg='black', width=20, height=1)

# Entries
base_link_input = Entry(req_fields, width=80)
max_images_input = Entry(req_fields, width=10)
file_format1 = Radiobutton(req_fields, text='.jpg', value=1, variable=selected)
file_format2 = Radiobutton(req_fields, text='.jpeg', value=2, variable=selected)
file_format3 = Radiobutton(req_fields, text='.png', value=3, variable=selected)
file_format4 = Radiobutton(req_fields, text='.gif', value=4, variable=selected)
file_format5 = Radiobutton(req_fields, text='.webp', value=5, variable=selected)

start_id_input = Entry(opt_fields, width=10)
max_id_length_input = Entry(opt_fields, width=10)
id_additional_input = Entry(opt_fields, width=10)

download_path_input = Entry(buttons, textvariable=selected_download_path, width=50)

# Buttons
download_path_button = Button(buttons,
                              text='Select download path',
                              command=select_download_path,
                              width=20,
                              height=1)
load_images_button = Button(buttons,
                            text='Load images',
                            command=load_gallery,
                            width=20,
                            height=2,
                            bg='#87d132',
                            fg='black')
clear_output_button = Button(buttons, text='Clear output', command=clear_output, width=20, height=2)
reset_fields_button = Button(buttons, text='Reset fields', command=reset_fields, width=20, height=2)
about_window_button = Button(buttons, text='About', command=about_window, width=20, height=1)
quit_button = Button(buttons,
                     text='Quit',
                     command=close,
                     width=20,
                     height=1,
                     bg='#de4743',
                     fg='black')

# Output
output_text = scrolledtext.ScrolledText(output_box, bg='black', fg='white', width=780, height=320)

# =====
base_link_label.grid(row=0, column=0, padx=5, pady=5)
max_images_label.grid(row=1, column=0, padx=5, pady=5)
file_format_label.grid(row=2, column=0, padx=5, pady=5)

start_id_label.grid(row=8, column=0, padx=5, pady=5)
max_id_length_label.grid(row=9, column=0, padx=5, pady=5)
id_additional_label.grid(row=10, column=0, padx=5, pady=5)

download_path_label.grid(row=12, column=0, padx=5, pady=5)

base_link_input.grid(row=0, column=1, padx=5, pady=5, sticky='W')
max_images_input.grid(row=1, column=1, padx=5, pady=5, sticky='W')
file_format1.grid(row=2, column=1, padx=5, pady=1, sticky='W')
file_format2.grid(row=3, column=1, padx=5, pady=1, sticky='W')
file_format3.grid(row=4, column=1, padx=5, pady=1, sticky='W')
file_format4.grid(row=5, column=1, padx=5, pady=1, sticky='W')
file_format5.grid(row=6, column=1, padx=5, pady=1, sticky='W')

start_id_input.grid(row=8, column=1, padx=5, pady=5, sticky='W')
max_id_length_input.grid(row=9, column=1, padx=5, pady=5, sticky='W')
id_additional_input.grid(row=10, column=1, padx=5, pady=5, sticky='W')

download_path_input.grid(row=12, column=1, padx=5, pady=5, sticky='W')

download_path_button.grid(row=12, column=2, padx=5, pady=5, sticky='W')
load_images_button.grid(row=13, column=0, padx=5, pady=5)
clear_output_button.grid(row=14, column=0, padx=5, pady=5)
reset_fields_button.grid(row=14, column=1, padx=5, pady=5, sticky='W')
about_window_button.grid(row=15, column=0, padx=5, pady=5, sticky='W')
quit_button.grid(row=15, column=1, padx=5, pady=5, sticky='W')

output_text.pack()

# =====
root.protocol('WM_DELETE_WINDOW', close)

root.mainloop()
