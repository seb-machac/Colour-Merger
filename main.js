const { app, BrowserWindow } = require('electron')
app.disableHardwareAcceleration();



const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 300,
    autoHideMenuBar: true,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})