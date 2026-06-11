$origenCss = Join-Path $PSScriptRoot '..\AssetsLocal\css'
$origenJs  = Join-Path $PSScriptRoot '..\AssetsLocal\js'
$destinoCss = Join-Path $PSScriptRoot '..\Assets\css'
$destinoJs  = Join-Path $PSScriptRoot '..\Assets\js'

# Convertir archivos CSS
Get-ChildItem -Path $origenCss -Filter '*.css' | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $wrapped  = "<style>`n$content`n</style>"
    $dest     = Join-Path $destinoCss ($_.BaseName + '.html')
    Set-Content -Path $dest -Value $wrapped -Encoding UTF8 -NoNewline
    Write-Host "OK: $($_.Name) -> Assets\css\$($_.BaseName).html"
}

# Convertir archivos JS
Get-ChildItem -Path $origenJs -Filter '*.js' | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $wrapped  = "<script>`n$content`n</script>"
    $dest     = Join-Path $destinoJs ($_.BaseName + '.html')
    Set-Content -Path $dest -Value $wrapped -Encoding UTF8 -NoNewline
    Write-Host "OK: $($_.Name) -> Assets\js\$($_.BaseName).html"
}
