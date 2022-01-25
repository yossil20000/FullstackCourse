@echo off
echo the command line: %0 %1 %2
pause
if not %2 (set %2=myfile.html)
echo entry%2 = %2%
pause