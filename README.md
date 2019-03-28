[![NPM version][npm-image]][npm-url] 
[![License][license-image]][license-url] 


Tables Library for Angular 6/7

A set of components that work together to create tabular content.

### Supports
- Works for Both with front-end and back-end data
- Filtering
- Sorting
- Search
- Pagination
- Page Size
- Exports 
  -  Copy
  -  CSV
  -  JSON
  -  Excel XLSX 
  -  Print
  -  PDF ( very basic )


### Dependencies
- thenBy library

 

### TODO:  
Friendly API  
Documentation on how to use (in progress)  
Further optimisations (in progress)  
Provide backend to frontend preconfiguration   
Provide some other sample backend systems node/php  
thenby will be replaced to introduce ordering by type

### Proof of Concept Application and Backend system   

View Online   
http://code.fairmutex.com/projects/web/FTablesSample/local   

Sample application Usage with Local Data and Web API always upated with the latest ( Sample API below )  
https://github.com/fairmutex/FTable-sample

Sample  Backend Web API .net Framework  
		Backend API core 2.2  
https://github.com/fairmutex/FTable-WebAPI-sample  

### Updates
```
0.0.7   Implemented Reset Filters functionality  
0.0.8   Restructured a lot to have Backend support and WebAPI Sample  
		Sorting is now using column name instead of index due to WebAPI back end  
0.0.9   Date Filtering Implemented, Optimized Number filtering Code  
0.0.10  Fixed Issue with Remote Date filtering  
0.0.11  Enhanced UX on Number and Date Filters (right Arrow moves cursor )  
0.0.12  Optimized Reset filter to call API once and Code cleanup 
0.0.13  Removed Bootstrap and FontAwesome from FTable dependency, setting styling at App level  
		FExporter takes a 'formats' input to customize export types available  
0.0.14  Fixed date filtering  
0.0.15  Changes in filtering tags, several class renames and minor adjustments
0.0.16  Fixed exporter to support all Browsers
		Added classes to sorting states to be set in app css
```




Warning: This is not production ready, published only to get feedback and ideas 


[MIT license]: http://opensource.org/licenses/MIT
[npm-image]: https://badge.fury.io/js/downloadjs.svg
[npm-url]: https://www.npmjs.com/package/ftable
[license-image]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: http://opensource.org/licenses/MIT
