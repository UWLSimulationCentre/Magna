![](https://img.shields.io/github/contributors/UWLSimulationCentre/project-magna) ![](https://img.shields.io/github/last-commit/UWLSimulationCentre/project-magna) ![](https://img.shields.io/github/languages/top/UWLSimulationCentre/project-magna) ![](https://img.shields.io/github/issues/UWLSimulationCentre/project-magna) ![](https://img.shields.io/github/license/UWLSimulationCentre/project-magna) ![](https://img.shields.io/website?url=https%3A%2F%2Fuwlsimulationcentre.github.io%2Fproject-magna%2F&label=Project%20Status)

# Project Magna - Patient Monitoring Emulator

A simple patient monitor emulator designed for multi-screen use in training medical students. It displays a basic patient monitor in one window, and allows you to control that display from another.

## Description

Designed to provide a simple method of emulating patient monitoring with the ability to change observations and ECGs to create different patient scenarios. **Project Magna** provides a control panel alongside a display panel to allow distance adjustment of observations to increase realism in simulated scenarios.

### Features

- Easily accessible & adjustable
- Provides control & display views for increased realism in scenarios
- Simple to use
- Animated ECGs of a variety of rhythms
- Adjustable and easy to update as medical evidence and guidance changes.

### Built with

- Vue.js
- Bootstrap
- Lodash
- CSS
- HTML

## Getting started

### Prerequisites
Accessible on Google Chrome & Firefox, not specifically tested on other browsers.

### Install
No installation required, simply click on [this link](https://uwlsimulationcentre.github.io/project-magna/) to access the package directly.

### Usage

Open the control panel on one monitor, and the display panel in another (in separate windows of the same browser.) They need to be loaded from the same place for data transfer to work, and they run just fine on GitHub.

To update the display, click the links on the display panel, and type things in the boxes. That's all there is to it. You can't break anything accidentally, so just play around with it.

### Troubleshooting

If anything goes wrong, the first thing to do is refresh the control panel. This won't delete the current data, as it's all stored in your browser. If data **is** the problem, click the ***reset everything*** button at the bottom of the screen. This fixes most things refreshing doesn't.

# Back matter

### Legal disclaimer
Usage of this tool for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local and national laws. Developers assume no liability and are not responsible for any misuse or damage caused by this repository.

### Acknowledgements

- Forked from [oldbiky/monitor](https://github.com/oldbinky/monitor/)
- Original design and execution by [@itaniknight](https://github.com/itaniknight)
- ECG images drawn by **Chris Robinson**
- Base16's [Tomorrow Night](https://chriskempson.github.io/base16/) colours

### License
This project is licensed under the [MIT License](https://github.com/UWLSimulationCentre/project-magna/blob/main/LICENSE.md).

### Known Bugs

- If you've used the app before, and it's been updated since, you might need to ***reset everything*** to get the new data.

- Sometimes the UI font doesn't load and the browser displays nothing instead. Browser refreshing fixes this most of the time.

- The ECG images don't display on tablet browsers. They display in desktop Chrome, and in desktop Chrome's tablet view, but not in tablet Chrome or Safari.

- The storage event doesn't fire in Chrome if you're running the app locally. This is a deliberate security feature, and you can disable it in Chrome, but you're generally better off running it from the github URL instead.