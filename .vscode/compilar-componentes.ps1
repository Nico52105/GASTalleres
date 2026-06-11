$origen = Join-Path $PSScriptRoot '..\ComponentesLocal'
$destino = Join-Path $PSScriptRoot '..\Componentes'

Get-ChildItem -Path $origen -Filter '*.js' | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $indented = ($content -split "`n") | ForEach-Object { "    $_" }
    $wrapped  = "<script>`n" + ($indented -join "`n") + "`n</script>"
    $dest     = Join-Path $destino ($_.BaseName + '.html')
    Set-Content -Path $dest -Value $wrapped -Encoding UTF8 -NoNewline
    Write-Host "OK: $($_.Name) -> Componentes\$($_.BaseName).html"
}
