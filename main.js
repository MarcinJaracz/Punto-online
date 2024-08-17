import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Odpowiednik __filename
const __filename = fileURLToPath(import.meta.url);

// Odpowiednik __dirname
const __dirname = path.dirname(__filename);

function createWindow() {
	const win = new BrowserWindow({
		width: 1920,
		height: 1080,
		webPreferences: {
		  preload: path.join(__dirname, 'preload.js'),
		  nodeIntegration: false,
		  contextIsolation: true,
		},
	  });
	  
	  win.loadURL('http://localhost:5173'); 
}	  

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
	  createWindow();
	}
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
	app.quit();
  }
});
