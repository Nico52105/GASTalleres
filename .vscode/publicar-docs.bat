@echo off
setlocal
chcp 65001 > nul

set "proyecto=%~dp0..\WEB\RepuestosOnline"
set "salida=%proyecto%\dist\RepuestosOnline\browser"
set "docs=%~dp0..\docs"

pushd "%proyecto%"
call npm run build -- --configuration production --base-href "/GASTalleres/"
if errorlevel 1 (
    echo ERROR: La compilacion fallo. La carpeta docs no se modificara.
    popd
    exit /b 1
)

if not exist "%salida%" (
    echo ERROR: No se encontro la salida de compilacion: "%salida%"
    popd
    exit /b 1
)

if not exist "%docs%" mkdir "%docs%"
del /q /s "%docs%\*" > nul 2>&1
for /d %%d in ("%docs%\*") do rd /s /q "%%d"
xcopy "%salida%\*" "%docs%\" /e /i /y > nul

echo OK: Build publicado en docs.
popd
exit /b 0