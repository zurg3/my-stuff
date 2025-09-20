#!/bin/bash

# Arch Linux GRUB Updater (ALGU)

sudo mkinitcpio -P
sudo grub-install /dev/sda
sudo grub-mkconfig -o /boot/grub/grub.cfg
