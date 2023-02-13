function ScreenChange() {
  fetch('/index2.html').then((res) => {
	  return res.text()
  }).then((text) => {
	  document.open()
	  document.write(text)
	  document.close()
  })
}

function BackChange() {
  fetch('/index.html').then((res) => {
	  return res.text()
  }).then((text) => {
	  document.open()
	  document.write(text)
	  document.close()
  })
}
