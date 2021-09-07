cmake_minimum_required(VERSION 3.20)

project(CPlusPlus VERSION 1.0)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)

add_executable(calc calc.cpp)
add_executable(git_puller git_puller.cpp)
add_executable(num_systems num_systems.cpp)
add_executable(unix_time unix_time.cpp)

if(WIN32 AND CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
  target_link_libraries(calc PUBLIC -static)
  target_link_libraries(git_puller PUBLIC -static)
  target_link_libraries(num_systems PUBLIC -static)
  target_link_libraries(unix_time PUBLIC -static)
endif()
