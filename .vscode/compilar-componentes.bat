@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul

set "origen=%~dp0..\ComponentesLocal"
set "destino=%~dp0..\Componentes"

rem Convertir archivos JS
for %%f in ("%origen%\*.js") do (
    (echo ^<script^> & type "%%f" & echo ^</script^>) > "%destino%\%%~nf.html"
    echo OK: %%~nxf -^> Componentes\%%~nf.html
)
