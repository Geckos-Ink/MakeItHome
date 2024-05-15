# Diario

È potenzialmente implementabile per macOS 11, ma bisogna implementare la cattura dello schermo e sistemare CapturePreview
Ed implementare la cattura schermo a immagine fissa: https://stackoverflow.com/questions/39691106/programmatically-screenshot-swift-3-macos

Creare sistema di autoriavvio del sistema per lubrificare la ram: https://nshipster.com/temporary-files/

# 1.9.1
- Voice recognition: https://developer.apple.com/documentation/speech/sfspeechrecognizer


## Generale

- Da' per sistente una finestra non più esistente (in XCode archive)
- Ogni tanto cambia spazio senza ragione durante l'attivazione di un'app

- Ordine delle finestre a ramengo (riordinarle)
- Controllare click destro

### Widget
- Clipboard: è possibile che se la top bar non viene aperta, dopo un po' di oggetti accumulati smetta di funzionare quando inizia ad eliminarli
- Apertura impostazioni automatica: https://gist.github.com/dagronf/c1fd2635c99c627bcfb2e7abb3c31a90

## 1.4
### TODO
- Il CapturePreview potrebbe freezzare dopo un tot di sleeping. In capture preview c'è un evento ScreenWake ma non è assicurato funzioni
- Non rileva lo spostamento di un'app da un'altra schermata
- Manca traduzione della preview. È importante?
- Fare 2 screenshot al secondo salvati, quando salva spazio mette la più vecchia

## Old
### To solve
- Controllare se il sistema è in dark mode per il background
- Creare avviso per nuova versione disponibile

### To do
- Quando la finestra di preview è piccola è impossibile da trascinare via
- Riaprire l'ultima app quando si cambia schermo col mouse 
- Spostare il "get cursor display" in un timer (o forse no...)
- Ogni tanto la registrazione smette di funzionare. Mettere una verifica e se necessario riavviare l'app
