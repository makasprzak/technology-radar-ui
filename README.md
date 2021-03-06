This project is an user interface for visualising technology radars stored as spreadsheets

To visualise your own radar:  
- use following [spreadsheet template](https://docs.google.com/spreadsheets/d/11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc/edit#gid=0) (create your own copy)
- find spreadsheet id in the url  
in our case for url `https://docs.google.com/spreadsheets/d/11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc/edit#gid=0`  
it is `11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc`
- open visualisation with you spreadsheet id  
  `https://pgs-dev.github.io/technology-radar-ui/{spreadsheetId}`
  in our example [https://pgs-dev.github.io/technology-radar-ui/11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc](https://pgs-dev.github.io/technology-radar-ui/11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc)
- TEMP: allow to load mixed content (in browser address bar)  
  Just because our parser is *temporary* loaded over HTTP but spreadsheet and UI over HTTPS

##Example radars  

**Frontend**  
- [spreadsheet with data](https://docs.google.com/spreadsheets/d/11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc/edit#gid=0)
- [radar UI](https://pgs-dev.github.io/technology-radar-ui/11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc)

**.NET**  
- [spreadsheet with data](https://docs.google.com/spreadsheets/d/18Wg-5N7qOnEr1sbSx2f_Yh90kTYNAxnpW7ZHE_9orQg/edit#gid=0)
- [radar UI](https://pgs-dev.github.io/technology-radar-ui/18Wg-5N7qOnEr1sbSx2f_Yh90kTYNAxnpW7ZHE_9orQg)


## Other links

### Backend
- repository (Java)   
https://bitbucket.pgs-soft.com/projects/PNP/repos/techradar-backend/browse  
- parser (Spreadsheet > JSON)   
http://pgslnx232.pgs-soft.com:8090/api  
- API contract (Raml)  
https://bitbucket.pgs-soft.com/projects/PFP/repos/pgs-technology-radar-api/browse/api.raml  