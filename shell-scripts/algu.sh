#!/bin/bash

# Arch Linux GRUB Updater (ALGU)

sudo mkinitcpio -p linux
sudo grub-install /dev/sda
sudo grub-mkconfig -o /boot/grub/grub.cfg
