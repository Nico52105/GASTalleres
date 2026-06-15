@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul

set "origenCss=%~dp0..\AssetsLocal\css"
set "origenJs=%~dp0..\AssetsLocal\js"
set "destinoCss=%~dp0..\Assets\css"
set "destinoJs=%~dp0..\Assets\js"

rem Convertir archivos CSS
for %%f in ("%origenCss%\*.css") do (
    (echo ^<style^> & type "%%f" & echo ^</style^>) > "%destinoCss%\%%~nf.html"
    echo OK: %%~nxf -^> Assets\css\%%~nf.html
)

rem Convertir archivos JS
for %%f in ("%origenJs%\*.js") do (
    if /I "%%~nf" NEQ "FuncionesComunes" (
        (echo ^<script^> & type "%%f" & echo ^</script^>) > "%destinoJs%\%%~nf.html"
        echo OK: %%~nxf -^> Assets\js\%%~nf.html
    )
)
