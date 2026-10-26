window.REMOTES = {
 "sony-bravia-vu31": {
  "remote": "Sony BRAVIA remote (VU31)",
  "device": "BRAVIA_VU31_4K, Google TV 14 (UKR1.240726.001), Realtek SoC, 2 GB",
  "note": "This set's buttons arrive as ordinary Android keycodes, so they are listed by \"key\" (from `dumpsys window policy`, the global-key table) rather than by Linux scancode. Listing them is what makes them configurable in Settings > Remote Buttons; \"native\" ones are shown for reference and never intercepted. Not yet pressed against the physical remote: the five \"App button\" names are by elimination, and the defaults are a starting point.",
  "buttons": [
   {
    "name": "Power",
    "key": 26,
    "label": "POWER",
    "kind": "native"
   },
   {
    "name": "Home",
    "key": 3,
    "label": "HOME",
    "kind": "native"
   },
   {
    "name": "Back",
    "key": 4,
    "label": "BACK",
    "kind": "native"
   },
   {
    "name": "Volume up",
    "key": 24,
    "label": "VOLUME_UP",
    "kind": "native"
   },
   {
    "name": "Volume down",
    "key": 25,
    "label": "VOLUME_DOWN",
    "kind": "native"
   },
   {
    "name": "Mute",
    "key": 164,
    "label": "VOLUME_MUTE",
    "kind": "native"
   },
   {
    "name": "Assistant (mic)",
    "key": 194,
    "label": "BUTTON_7",
    "kind": "native"
   },
   {
    "name": "Voice (second)",
    "key": 195,
    "label": "BUTTON_8",
    "kind": "native"
   },
   {
    "name": "Input",
    "key": 178,
    "label": "TV_INPUT",
    "kind": "native"
   },
   {
    "name": "TV",
    "key": 170,
    "label": "TV",
    "kind": "configurable",
    "default": "live"
   },
   {
    "name": "Netflix",
    "key": 191,
    "label": "BUTTON_4",
    "kind": "configurable",
    "default": "com.netflix.ninja"
   },
   {
    "name": "Prime Video",
    "key": 189,
    "label": "BUTTON_2",
    "kind": "configurable",
    "default": "com.amazon.amazonvideo.livingroom"
   },
   {
    "name": "YouTube",
    "key": 201,
    "label": "BUTTON_14",
    "kind": "configurable",
    "default": "com.google.android.youtube.tv"
   },
   {
    "name": "YouTube (second)",
    "key": 202,
    "label": "BUTTON_15",
    "kind": "configurable",
    "default": "com.google.android.youtube.tv"
   },
   {
    "name": "App button 3",
    "key": 190,
    "label": "BUTTON_3",
    "kind": "configurable",
    "default": ""
   },
   {
    "name": "App button 5",
    "key": 192,
    "label": "BUTTON_5",
    "kind": "configurable",
    "default": ""
   },
   {
    "name": "App button 9",
    "key": 196,
    "label": "BUTTON_9",
    "kind": "configurable",
    "default": ""
   },
   {
    "name": "App button 11",
    "key": 198,
    "label": "BUTTON_11",
    "kind": "configurable",
    "default": ""
   },
   {
    "name": "App button 13",
    "key": 200,
    "label": "BUTTON_13",
    "kind": "configurable",
    "default": ""
   }
  ]
 },
 "tcl-55c725": {
  "remote": "TCL RC902V",
  "device": "TCL_RC902V_M2 (Bluetooth), Brazil",
  "note": "Scancodes from `tools/tv.py 'getevent -lt'`, names from /system/usr/keylayout/Generic.kl. Native buttons are listed for reference and never intercepted.",
  "buttons": [
   {
    "name": "Mudo",
    "scan": 113,
    "label": "VOLUME_MUTE",
    "kind": "native"
   },
   {
    "name": "Marcador",
    "scan": 395,
    "label": "TCL_LIST",
    "kind": "configurable",
    "default": "tmdb:watchlist"
   },
   {
    "name": "Google Assistente",
    "label": "voice",
    "kind": "native"
   },
   {
    "name": "Engrenagem",
    "scan": 233,
    "label": "TCL_SET",
    "kind": "configurable",
    "default": "settings"
   },
   {
    "name": "Voltar",
    "scan": 158,
    "label": "BACK",
    "kind": "native"
   },
   {
    "name": "Início",
    "scan": 172,
    "label": "HOME",
    "kind": "native"
   },
   {
    "name": "TV",
    "scan": 365,
    "label": "TCL_EPG",
    "kind": "configurable",
    "default": "live"
   },
   {
    "name": "Entrada",
    "scan": 417,
    "label": "TV_INPUT",
    "kind": "native"
   },
   {
    "name": "Volume +",
    "scan": 115,
    "label": "VOLUME_UP",
    "kind": "native"
   },
   {
    "name": "Volume −",
    "scan": 114,
    "label": "VOLUME_DOWN",
    "kind": "native"
   },
   {
    "name": "Canal +",
    "scan": 402,
    "label": "CHANNEL_UP",
    "kind": "native"
   },
   {
    "name": "Canal −",
    "scan": 403,
    "label": "CHANNEL_DOWN",
    "kind": "native"
   },
   {
    "name": "Menu",
    "scan": 139,
    "label": "MENU",
    "kind": "native"
   },
   {
    "name": "Camadas",
    "scan": 749,
    "label": "TCL_HOVRING",
    "kind": "native"
   },
   {
    "name": "Teclas coloridas",
    "scan": 235,
    "label": "TCL_NUMBER",
    "kind": "configurable",
    "default": ""
   },
   {
    "name": "Grade vermelha",
    "scan": 204,
    "label": "TCL_DASHBOARD",
    "kind": "configurable",
    "default": "tmdb:explore"
   },
   {
    "name": "Netflix",
    "scan": 242,
    "label": "TCL_NETFLIX",
    "kind": "configurable",
    "default": "com.netflix.ninja"
   },
   {
    "name": "Prime Video",
    "scan": 752,
    "label": "TCL_PRIMEVIDEO",
    "kind": "configurable",
    "default": "com.amazon.amazonvideo.livingroom"
   },
   {
    "name": "Globoplay",
    "scan": 586,
    "label": "TCL_GLOBO_PLAY",
    "kind": "configurable",
    "default": "com.globo.globotv"
   },
   {
    "name": "Disney+",
    "scan": 762,
    "label": "TCL_DISNEY",
    "kind": "configurable",
    "default": "com.disney.disneyplus"
   },
   {
    "name": "YouTube",
    "scan": 245,
    "label": "TCL_YOUTUBE",
    "kind": "configurable",
    "default": "com.google.android.youtube.tv"
   },
   {
    "name": "TCL Channel",
    "scan": 227,
    "label": "TCL_QUICK_MENU",
    "kind": "configurable",
    "default": ""
   }
  ]
 }
};
