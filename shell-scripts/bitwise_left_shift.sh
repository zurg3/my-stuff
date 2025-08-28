#!/bin/bash

for (( i = 0; i < 32; ++i )); do
  echo $((1 << $i))
done
