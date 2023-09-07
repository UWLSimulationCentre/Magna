// FUNCTIONS ///////////////////////////////////////////////////////////////////

function getLocal() {
    return JSON.parse(localStorage.getItem("pm_core"))
}

function setLocal(data) {
    localStorage.setItem("pm_core", JSON.stringify(data))
}

function createBackup(data) {
    localStorage.setItem("pm_core_backup", JSON.stringify(data))
}

function restoreBackup() {
    return JSON.parse(localStorage.getItem("pm_core_backup"))
}

// VARIABLES ///////////////////////////////////////////////////////////////////

emt = [
    { id: "1-Sinus", src: "/docs/img/1-Sinus.gif",  name: "Sinus", current: false },
    { id: "2-Asystole", src: "img/2-Asystole.gif",  name: "Asystole", current: false },
    { id: "3-P-wave-Asystole", src: "img/3-P-wave-Asystole.gif",  name: "P wave Asystole", current: false },
     { id: "4-Venricular-fibrillation-coarse", src: "img/4-Venricular-fibrillation-coarse.gif",  name: "4-Venricular-fibrillation-coarse", current: false },
     { id: "5-Ventricular-fibrillation-Fine", src: "img/5-Ventricular-fibrillation-Fine.gif",  name: "5-Ventricular-fibrillation-Fine", current: false },
     { id: "6-Atrial Fibrillation", src: "img/6-Atrial Fibrillation.gif",  name: "6-Atrial Fibrillation", current: false },
     { id: "7-Premature ventricular beat", src: "img/7-Premature ventricular beat.gif",  name: "7-Premature ventricular beat", current: false },
     { id: "8-Junctional escape beat", src: "img/8-Junctional escape beat.gif",  name: "8-Junctional escape beat", current: false },
     { id: "9-Atrial flutter 2-1 Atriventic", src: "img/9-Atrial flutter 2-1 Atriventic.gif",  name: "9-Atrial flutter 2-1 Atriventic", current: false },
     { id: "10-Monomorphic ventricular tachycardia", src: "img/10-Monomorphic ventricular tachycardia.gif",  name: "10-Monomorphic ventricular tachycardia", current: false },
     { id: "11-Ventricular Tachycardia with fusion and capture beats", src: "img/11-Ventricular Tachycardia with fusion and capture beats.gif",  name: "11-Ventricular Tachycardia with fusion and capture beats", current: false },
     { id: "12-Polymorphic ventricular tachycardia", src: "img/12-Polymorphic ventricular tachycardia.gif",  name: "12-Polymorphic ventricular tachycardia", current: false },
     { id: "13-Sinus Bradycardia", src: "img/13-Sinus Bradycardia.gif",  name: "13-Sinus Bradycardia", current: false },
    { id: "14-Paced rythm", src: "img/14-Paced rythm.gif",  name: "14-Paced rythm", current: false },
    { id: "15-1st-degree-Atrioventricular-block", src: "img/15-1st-degree-Atrioventricular-block.gif",  name: "15-1st-degree-Atrioventricular-block", current: false },
    { id: "16-Mobitz type i or Wenkebach block", src: "img/16-Mobitz type i or Wenkebach block.gif",  name: "16-Mobitz type i or Wenkebach block", current: false },
    { id: "17-Mobitz type ii or 2nd degree atrioventricular block (2-1)", src: "img/17-Mobitz type ii or 2nd degree atrioventricular block (2-1).gif",  name: "17-Mobitz type ii or 2nd degree atrioventricular block (2-1)", current: false },
    { id: "18-Mobitz type ii 2nd degree atrioventricular block (3-1)", src: "img/18-Mobitz type ii 2nd degree atrioventricular block (3-1).gif",  name: "18-Mobitz type ii 2nd degree atrioventricular block (3-1)", current: false },
    { id: "19-3rd degree atrioventricular block", src: "img/19-3rd degree atrioventricular block.gif",  name: "19-3rd degree atrioventricular block", current: false },
    { id: "20-Agonal rythm", src: "img/20-Agonal rythm.gif",  name: "20-Agonal rythm", current: false },
    { id: "21-Supraventricular tachycardia", src: "img/21-Supraventricular tachycardia.gif",  name: "21-Supraventricular tachycardia", current: false },
    { id: "22-Atrial flutter", src: "img/22-Atrial flutter.gif",  name: "22-Atrial flutter", current: false },
    { id: "23-ST Elevation", src: "img/23-ST Elevation.gif",  name: "23-ST Elevation", current: false },
    { id: "24-Sinus Tachycardia", src: "img/24-Sinus Tachycardia.gif",  name: "24-Sinus Tachycardia", current: false },
    
    // { id: "xxvid", src: "mp4/sinus-rhythm.mp4", name: "Sinus Rhythm (Video)", current: false, video: true }
]

input = [
    { id: "cr", name: "Cap Refill",  data: null, visible: false },
    { id: "bs", name: "Blood Glucose", data: null, visible: false },
    { id: "rs", name: "Respiration", data: null, visible: false },
    { id: "sp", name: "SpO2",        data: null, visible: false },
    { id: "pl", name: "Pulse",       data: null, visible: false },
    { id: "nb", name: "NIBP",        data: null, visible: false },
    { id: "bt", name: "Body Temp",   data: null, visible: false },
    { id: "yy", name: "Custom",      data: null, visible: false },
]

core = {
    emt: emt,
    emt_current: {
        src: "img/xx.png",
        type: "image"
    },
    input: input
}
