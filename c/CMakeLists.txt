cmake_minimum_required(VERSION 3.16)

project(C VERSION 1.0)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED True)

add_executable(calc calc.c)

if (WIN32 AND CMAKE_C_COMPILER_ID STREQUAL "GNU")
  target_link_libraries(calc PUBLIC -static)
endif ()
