from tkinter import *
from tkinter import scrolledtext
from tkinter import filedialog
from tkinter import messagebox
import hashlib

program_name = 'Hash sums (GUI)'
program_version = 'v0.1.6'
program_author = 'zurg3 (Stepan Skryabin)'
tkinter_version = str(TkVersion)

root = Tk()

# root.iconbitmap(r'./img/app_icon.ico')

hash_sums_text = LabelFrame(root, text='String hash')
hash_sums_file = LabelFrame(root, text='File hash')
buttons = Frame(root)
output_box = LabelFrame(root, text='Output')

root.title(program_name + ' ' + program_version)
root.geometry('800x600')

selected_file = StringVar()


def get_hash_sums_text():
    hash_text = str(hash_sums_text_input.get())
    hash_text = hash_text.encode('utf-8')

    md5 = hashlib.md5(hash_text).hexdigest()
    sha1 = hashlib.sha1(hash_text).hexdigest()
    sha256 = hashlib.sha256(hash_text).hexdigest()
    sha512 = hashlib.sha512(hash_text).hexdigest()

    output_text.insert(INSERT, 'MD5: ' + md5 + '\n')
    output_text.insert(INSERT, 'SHA1: ' + sha1 + '\n')
    output_text.insert(INSERT, 'SHA256: ' + sha256 + '\n')
    output_text.insert(INSERT, 'SHA512: ' + sha512 + '\n')
    output_text.see('end')
    root.update()


def get_hash_sums_file():
    file_hash = str(hash_sums_file_input.get())

    md5 = hashlib.md5()
    with open(file_hash, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            md5.update(chunk)
        output_text.insert(INSERT, 'MD5: ' + md5.hexdigest() + '\n')
        output_text.see('end')
        root.update()

    sha1 = hashlib.sha1()
    with open(file_hash, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            sha1.update(chunk)
        output_text.insert(INSERT, 'SHA1: ' + sha1.hexdigest() + '\n')
        output_text.see('end')
        root.update()

    sha256 = hashlib.sha256()
    with open(file_hash, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            sha256.update(chunk)
        output_text.insert(INSERT, 'SHA256: ' + sha256.hexdigest() + '\n')
        output_text.see('end')
        root.update()

    sha512 = hashlib.sha512()
    with open(file_hash, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b""):
            sha512.update(chunk)
        output_text.insert(INSERT, 'SHA512: ' + sha512.hexdigest() + '\n')
        output_text.see('end')
        root.update()


def select_file():
    global selected_file
    selected_file_get = filedialog.askopenfilename()
    selected_file.set(selected_file_get)


def clear_output():
    output_text.delete('1.0', 'end')
    root.update()


def about_window():
    messagebox.showinfo(program_name + ' ' + program_version,
                        program_name + ' ' + program_version + '\n' +
                        'Author: ' + program_author + '\n\n' +
                        'Tkinter version: ' + tkinter_version)


def close():
    root.destroy()
    root.quit()


# =====
hash_sums_text.pack(fill='both')
hash_sums_file.pack(fill='both')
buttons.pack(fill='both')
output_box.pack(fill='both')

# Labels
hash_sums_text_label = Label(hash_sums_text, text='Text', bg='white', fg='black', width=20, height=1)
hash_sums_file_label = Label(hash_sums_file, text='File', bg='white', fg='black', width=20, height=1)

# Entries
hash_sums_text_input = Entry(hash_sums_text, width=100)
hash_sums_file_input = Entry(hash_sums_file, textvariable=selected_file, width=100)

# Buttons
hash_sums_text_button = Button(hash_sums_text,
                               text='Get hash sums',
                               command=get_hash_sums_text,
                               width=20,
                               height=2,
                               bg='green',
                               fg='white')
hash_sums_file_select_button = Button(hash_sums_file,
                                      text='Select file',
                                      command=select_file,
                                      width=20,
                                      height=1)
hash_sums_file_button = Button(hash_sums_file,
                               text='Get hash sums',
                               command=get_hash_sums_file,
                               width=20,
                               height=2,
                               bg='green',
                               fg='white')
clear_output_button = Button(buttons,
                             text='Clear output',
                             command=clear_output,
                             width=20,
                             height=2)
about_window_button = Button(buttons, text='About', command=about_window, width=20, height=1)
quit_button = Button(buttons,
                     text='Quit',
                     command=close,
                     width=20,
                     height=1,
                     bg='red',
                     fg='white')

# Output
output_text = scrolledtext.ScrolledText(output_box, bg='black', fg='white', width=780, height=320)

# =====
hash_sums_text_label.grid(row=0, column=0, padx=5, pady=5, sticky='W')
hash_sums_file_label.grid(row=4, column=0, padx=5, pady=5, sticky='W')

hash_sums_text_input.grid(row=1, column=0, padx=5, pady=5, sticky='W')
hash_sums_file_input.grid(row=5, column=0, padx=5, pady=5, sticky='W')

hash_sums_text_button.grid(row=2, column=0, padx=5, pady=5, sticky='W')
hash_sums_file_select_button.grid(row=5, column=1, padx=5, pady=5, sticky='W')
hash_sums_file_button.grid(row=6, column=0, padx=5, pady=5, sticky='W')
clear_output_button.grid(row=8, column=0, padx=5, pady=5, sticky='W')
about_window_button.grid(row=9, column=0, padx=5, pady=5, sticky='W')
quit_button.grid(row=9, column=1, padx=5, pady=5, sticky='W')

output_text.pack()

# =====
root.protocol('WM_DELETE_WINDOW', close)

root.mainloop()
