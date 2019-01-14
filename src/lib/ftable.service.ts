import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {  map } from 'rxjs/operators';
import {firstBy} from 'thenby';
import {  FTable, FColumn, FSearch, FOrder  } from './ftable.model';


// @Injectable({
//   providedIn: 'root'
// })


@Injectable()
export class FTableService {

    constructor(private http: HttpClient) {
    }

    public data1 = [
      {
        "name": "Richards",
        "surname": "Franco",
        "age": 36,
        "email": "richards.franco@undefined.biz",
        "dateOfBirth": "2016-04-11T12:15:19.329Z",
        "status": "Enabled",
         "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Allison",
        "surname": "Chan",
        "age": 23,
        "email": "allison.chan@undefined.me",
        "dateOfBirth": "2018-06-04T14:34:07.111Z",
        "status": "Enabled",
         "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Aisha",
        "surname": "Hodges",
        "age": 20,
        "email": "aisha.hodges@undefined.io",
        "dateOfBirth": "2014-11-24T06:02:00.175Z",
        "status": "Enabled",
         "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Pratt",
        "surname": "Briggs",
        "age": 36,
        "email": "pratt.briggs@undefined.tv",
        "dateOfBirth": "2016-06-19T15:38:57.099Z",
         "status": "Enabled", 
         "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Maricela",
        "surname": "Holland",
        "age": 24,
        "email": "maricela.holland@undefined.biz",
        "dateOfBirth": "2015-06-16T02:29:29.827Z",
         "status": "Enabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Delia",
        "surname": "Bolton",
        "age": 30,
        "email": "delia.bolton@undefined.info",
        "dateOfBirth": "2014-04-01T15:47:28.684Z",
         "status": "Enabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Carroll",
        "surname": "Stafford",
        "age": 25,
        "email": "carroll.stafford@undefined.co.uk",
        "dateOfBirth": "2017-12-03T11:11:16.175Z",
         "status": "Enabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Odom",
        "surname": "Wolf",
        "age": 29,
        "email": "odom.wolf@undefined.com",
        "dateOfBirth": "2014-06-25T08:28:23.768Z",
         "status": "Enabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Wolf",
        "surname": "Green",
        "age": 38,
        "email": "wolf.green@undefined.us",
        "dateOfBirth": "2017-12-03T21:42:15.749Z",
         "status": "Enabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Larson",
        "surname": "Benjamin",
        "age": 38,
        "email": "larson.benjamin@undefined.net",
        "dateOfBirth": "2017-03-14T17:34:42.043Z",
         "status": "Enabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Andrews",
        "surname": "Warner",
        "age": 37,
        "email": "andrews.warner@undefined.name",
        "dateOfBirth": "2014-09-12T15:52:05.787Z",
         "status": "Enabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Clayton",
        "surname": "Langley",
        "age": 20,
        "email": "clayton.langley@undefined.org",
        "dateOfBirth": "2014-04-11T21:49:14.890Z",
         "status": "Enabled", 
         "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Anna",
        "surname": "Pearson",
        "age": 36,
        "email": "anna.pearson@undefined.biz",
        "dateOfBirth": "2016-04-27T10:29:21.655Z",
         "status": "Enabled", 
         "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Hilary",
        "surname": "Sloan",
        "age": 35,
        "email": "hilary.sloan@undefined.me",
        "dateOfBirth": "2017-08-31T02:22:30.251Z",
         "status": "Disabled", 
         "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Estella",
        "surname": "Welch",
        "age": 40,
        "email": "estella.welch@undefined.io",
        "dateOfBirth": "2015-10-12T19:46:53.555Z",
         "status": "Enabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Carlene",
        "surname": "Rivas",
        "age": 40,
        "email": "carlene.rivas@undefined.tv",
        "dateOfBirth": "2015-12-04T10:19:41.452Z",
         "status": "Disabled",
          "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Graciela",
        "surname": "Rasmussen",
        "age": 39,
        "email": "graciela.rasmussen@undefined.biz",
        "dateOfBirth": "2014-11-22T08:10:04.641Z",
         "status": "Disabled", 
         "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Warner",
        "surname": "Hubbard",
        "age": 21,
        "email": "warner.hubbard@undefined.info",
        "dateOfBirth": "2018-04-01T13:19:55.448Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Roslyn",
        "surname": "Fischer",
        "age": 20,
        "email": "roslyn.fischer@undefined.co.uk",
        "dateOfBirth": "2017-10-15T11:05:43.610Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Meagan",
        "surname": "Stewart",
        "age": 37,
        "email": "meagan.stewart@undefined.com",
        "dateOfBirth": "2018-03-02T05:51:23.280Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Florence",
        "surname": "Dillard",
        "age": 28,
        "email": "florence.dillard@undefined.us",
        "dateOfBirth": "2016-06-07T05:58:38.887Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Tillman",
        "surname": "Montoya",
        "age": 34,
        "email": "tillman.montoya@undefined.net",
        "dateOfBirth": "2017-01-09T12:56:44.861Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Buchanan",
        "surname": "Coffey",
        "age": 20,
        "email": "buchanan.coffey@undefined.name",
        "dateOfBirth": "2015-04-17T08:23:22.423Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Melody",
        "surname": "Phelps",
        "age": 28,
        "email": "melody.phelps@undefined.org",
        "dateOfBirth": "2018-09-19T22:24:30.856Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Boyer",
        "surname": "Bradshaw",
        "age": 34,
        "email": "boyer.bradshaw@undefined.biz",
        "dateOfBirth": "2016-06-06T01:12:03.248Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Schmidt",
        "surname": "Abbott",
        "age": 37,
        "email": "schmidt.abbott@undefined.me",
        "dateOfBirth": "2017-08-27T07:49:31.167Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
        "name": "Leach",
        "surname": "Franks",
        "age": 39,
        "email": "leach.franks@undefined.io",
        "dateOfBirth": "2018-03-21T18:28:19.326Z",
         "status": "Enabled", "picture": "http://placehold.it/32x32"
      },
      {
          "name": "Russell",
          "surname": "Bullock",
          "age": 32,
          "email": "russell.bullock@undefined.org",
          "dateOfBirth": "2018-06-01T13:25:52.169Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Tabitha",
          "surname": "Calderon",
          "age": 31,
          "email": "tabitha.calderon@undefined.co.uk",
          "dateOfBirth": "2017-12-04T18:51:49.040Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Olivia",
          "surname": "Carson",
          "age": 34,
          "email": "olivia.carson@undefined.us",
          "dateOfBirth": "2015-07-17T13:10:18.761Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Iris",
          "surname": "Bean",
          "age": 32,
          "email": "iris.bean@undefined.tv",
          "dateOfBirth": "2014-06-05T05:45:31.287Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Rachael",
          "surname": "Garner",
          "age": 27,
          "email": "rachael.garner@undefined.ca",
          "dateOfBirth": "2016-03-30T05:32:26.710Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Veronica",
          "surname": "Shaw",
          "age": 23,
          "email": "veronica.shaw@undefined.com",
          "dateOfBirth": "2017-03-05T23:07:36.134Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Snider",
          "surname": "Small",
          "age": 22,
          "email": "snider.small@undefined.info",
          "dateOfBirth": "2018-07-25T03:15:38.197Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Chan",
          "surname": "Acosta",
          "age": 31,
          "email": "chan.acosta@undefined.me",
          "dateOfBirth": "2017-09-11T07:34:02.216Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Debra",
          "surname": "Mcdaniel",
          "age": 35,
          "email": "debra.mcdaniel@undefined.biz",
          "dateOfBirth": "2014-03-18T08:50:36.905Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Gonzales",
          "surname": "Kelly",
          "age": 33,
          "email": "gonzales.kelly@undefined.biz",
          "dateOfBirth": "2014-02-11T00:57:39.539Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Marina",
          "surname": "Watkins",
          "age": 37,
          "email": "marina.watkins@undefined.io",
          "dateOfBirth": "2014-01-05T07:33:09.296Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Morrison",
          "surname": "Cash",
          "age": 24,
          "email": "morrison.cash@undefined.name",
          "dateOfBirth": "2014-12-05T17:50:22.331Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Josie",
          "surname": "Bowman",
          "age": 31,
          "email": "josie.bowman@undefined.org",
          "dateOfBirth": "2016-08-23T23:29:43.227Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Kathleen",
          "surname": "Stanley",
          "age": 29,
          "email": "kathleen.stanley@undefined.co.uk",
          "dateOfBirth": "2018-02-08T08:34:33.599Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Anna",
          "surname": "Sullivan",
          "age": 34,
          "email": "anna.sullivan@undefined.us",
          "dateOfBirth": "2014-01-11T12:33:59.412Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Burns",
          "surname": "Caldwell",
          "age": 24,
          "email": "burns.caldwell@undefined.tv",
          "dateOfBirth": "2015-01-08T10:13:43.338Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Carla",
          "surname": "Hobbs",
          "age": 21,
          "email": "carla.hobbs@undefined.ca",
          "dateOfBirth": "2016-11-26T07:24:34.962Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Clare",
          "surname": "Mcguire",
          "age": 36,
          "email": "clare.mcguire@undefined.com",
          "dateOfBirth": "2017-07-14T20:11:21.057Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Dillard",
          "surname": "Alexander",
          "age": 21,
          "email": "dillard.alexander@undefined.info",
          "dateOfBirth": "2015-11-18T02:34:57.394Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Valdez",
          "surname": "Lindsay",
          "age": 20,
          "email": "valdez.lindsay@undefined.me",
          "dateOfBirth": "2015-12-28T18:00:38.796Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Mathis",
          "surname": "Burks",
          "age": 37,
          "email": "mathis.burks@undefined.biz",
          "dateOfBirth": "2014-12-22T05:35:35.274Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Calderon",
          "surname": "Weber",
          "age": 32,
          "email": "calderon.weber@undefined.biz",
          "dateOfBirth": "2018-08-28T18:29:58.713Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Carolina",
          "surname": "Dennis",
          "age": 34,
          "email": "carolina.dennis@undefined.io",
          "dateOfBirth": "2015-03-05T14:49:27.824Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Jeri",
          "surname": "Hopper",
          "age": 35,
          "email": "jeri.hopper@undefined.name",
          "dateOfBirth": "2017-11-19T00:29:17.605Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Meghan",
          "surname": "Pacheco",
          "age": 22,
          "email": "meghan.pacheco@undefined.org",
          "dateOfBirth": "2018-06-21T01:06:10.689Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Jana",
          "surname": "Buckley",
          "age": 22,
          "email": "jana.buckley@undefined.co.uk",
          "dateOfBirth": "2016-10-26T23:37:39.513Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Mitzi",
          "surname": "Rowland",
          "age": 28,
          "email": "mitzi.rowland@undefined.us",
          "dateOfBirth": "2017-12-05T05:50:12.255Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Hunt",
          "surname": "Dotson",
          "age": 25,
          "email": "hunt.dotson@undefined.tv",
          "dateOfBirth": "2014-09-07T22:25:49.654Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Schultz",
          "surname": "Murphy",
          "age": 38,
          "email": "schultz.murphy@undefined.ca",
          "dateOfBirth": "2017-12-02T19:36:11.337Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Erickson",
          "surname": "Poole",
          "age": 34,
          "email": "erickson.poole@undefined.com",
          "dateOfBirth": "2016-06-06T23:26:33.658Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Gwendolyn",
          "surname": "Dean",
          "age": 25,
          "email": "gwendolyn.dean@undefined.info",
          "dateOfBirth": "2018-02-11T23:36:09.975Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Kathy",
          "surname": "Velazquez",
          "age": 24,
          "email": "kathy.velazquez@undefined.me",
          "dateOfBirth": "2014-03-01T12:54:58.711Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Duffy",
          "surname": "Zimmerman",
          "age": 25,
          "email": "duffy.zimmerman@undefined.biz",
          "dateOfBirth": "2016-11-02T16:05:49.789Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Selma",
          "surname": "Mcintyre",
          "age": 36,
          "email": "selma.mcintyre@undefined.biz",
          "dateOfBirth": "2014-10-16T04:26:51.688Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Madeline",
          "surname": "Travis",
          "age": 34,
          "email": "madeline.travis@undefined.io",
          "dateOfBirth": "2015-12-26T16:34:29.580Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Horton",
          "surname": "Christensen",
          "age": 32,
          "email": "horton.christensen@undefined.name",
          "dateOfBirth": "2017-12-15T06:12:38.723Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Catherine",
          "surname": "Mckenzie",
          "age": 30,
          "email": "catherine.mckenzie@undefined.org",
          "dateOfBirth": "2018-07-13T12:42:23.006Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Jacqueline",
          "surname": "Newman",
          "age": 40,
          "email": "jacqueline.newman@undefined.co.uk",
          "dateOfBirth": "2018-02-09T04:40:41.872Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Lang",
          "surname": "Ryan",
          "age": 24,
          "email": "lang.ryan@undefined.us",
          "dateOfBirth": "2016-07-29T18:38:04.465Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Tina",
          "surname": "Nichols",
          "age": 23,
          "email": "tina.nichols@undefined.tv",
          "dateOfBirth": "2014-04-30T07:50:54.152Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Mitchell",
          "surname": "Langley",
          "age": 39,
          "email": "mitchell.langley@undefined.ca",
          "dateOfBirth": "2018-08-30T19:40:27.094Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Judy",
          "surname": "Park",
          "age": 33,
          "email": "judy.park@undefined.com",
          "dateOfBirth": "2014-01-01T17:25:20.260Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Gertrude",
          "surname": "Dickerson",
          "age": 33,
          "email": "gertrude.dickerson@undefined.info",
          "dateOfBirth": "2016-04-03T17:15:01.752Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Marsha",
          "surname": "Sargent",
          "age": 29,
          "email": "marsha.sargent@undefined.me",
          "dateOfBirth": "2017-11-23T00:38:32.666Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Shannon",
          "surname": "Kirby",
          "age": 35,
          "email": "shannon.kirby@undefined.biz",
          "dateOfBirth": "2014-10-02T14:39:26.008Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Benton",
          "surname": "Wilkins",
          "age": 30,
          "email": "benton.wilkins@undefined.biz",
          "dateOfBirth": "2016-03-19T08:17:26.824Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Hyde",
          "surname": "Day",
          "age": 28,
          "email": "hyde.day@undefined.io",
          "dateOfBirth": "2018-05-15T08:11:27.670Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Celeste",
          "surname": "Guzman",
          "age": 23,
          "email": "celeste.guzman@undefined.name",
          "dateOfBirth": "2015-06-27T22:39:32.012Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "West",
          "surname": "Randall",
          "age": 38,
          "email": "west.randall@undefined.org",
          "dateOfBirth": "2015-08-23T05:54:16.194Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Barnett",
          "surname": "Hendrix",
          "age": 25,
          "email": "barnett.hendrix@undefined.co.uk",
          "dateOfBirth": "2016-10-16T11:38:52.328Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Roberts",
          "surname": "Mack",
          "age": 29,
          "email": "roberts.mack@undefined.us",
          "dateOfBirth": "2017-12-15T11:49:42.017Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Ola",
          "surname": "Ball",
          "age": 36,
          "email": "ola.ball@undefined.tv",
          "dateOfBirth": "2017-05-16T20:00:09.003Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Arlene",
          "surname": "Mckay",
          "age": 21,
          "email": "arlene.mckay@undefined.ca",
          "dateOfBirth": "2016-08-29T16:25:39.393Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Yang",
          "surname": "Pierce",
          "age": 26,
          "email": "yang.pierce@undefined.com",
          "dateOfBirth": "2017-03-29T14:34:21.035Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Elizabeth",
          "surname": "Carr",
          "age": 40,
          "email": "elizabeth.carr@undefined.info",
          "dateOfBirth": "2018-03-09T00:47:06.402Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Sweet",
          "surname": "Brewer",
          "age": 27,
          "email": "sweet.brewer@undefined.me",
          "dateOfBirth": "2015-10-23T19:12:19.687Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Burt",
          "surname": "Roberson",
          "age": 36,
          "email": "burt.roberson@undefined.biz",
          "dateOfBirth": "2014-01-23T07:46:17.574Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Valeria",
          "surname": "Delgado",
          "age": 29,
          "email": "valeria.delgado@undefined.biz",
          "dateOfBirth": "2018-01-09T13:11:22.274Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Luna",
          "surname": "Todd",
          "age": 20,
          "email": "luna.todd@undefined.io",
          "dateOfBirth": "2014-04-27T02:11:25.901Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Slater",
          "surname": "Glover",
          "age": 32,
          "email": "slater.glover@undefined.name",
          "dateOfBirth": "2018-05-02T00:43:33.803Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Zimmerman",
          "surname": "Allison",
          "age": 34,
          "email": "zimmerman.allison@undefined.org",
          "dateOfBirth": "2015-08-20T14:13:35.291Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Gordon",
          "surname": "Joyce",
          "age": 31,
          "email": "gordon.joyce@undefined.co.uk",
          "dateOfBirth": "2017-04-12T15:44:39.400Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Powell",
          "surname": "Grant",
          "age": 32,
          "email": "powell.grant@undefined.us",
          "dateOfBirth": "2014-03-04T12:40:33.795Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "James",
          "surname": "Brennan",
          "age": 34,
          "email": "james.brennan@undefined.tv",
          "dateOfBirth": "2015-03-23T18:36:43.391Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Ernestine",
          "surname": "Chang",
          "age": 25,
          "email": "ernestine.chang@undefined.ca",
          "dateOfBirth": "2015-12-13T08:37:41.425Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Barrera",
          "surname": "Harding",
          "age": 31,
          "email": "barrera.harding@undefined.com",
          "dateOfBirth": "2017-04-02T17:41:43.214Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Franco",
          "surname": "Santos",
          "age": 23,
          "email": "franco.santos@undefined.info",
          "dateOfBirth": "2018-02-12T01:03:45.737Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Quinn",
          "surname": "Chen",
          "age": 40,
          "email": "quinn.chen@undefined.me",
          "dateOfBirth": "2017-05-26T08:47:56.773Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Catalina",
          "surname": "Porter",
          "age": 38,
          "email": "catalina.porter@undefined.biz",
          "dateOfBirth": "2016-09-27T21:30:37.328Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Marianne",
          "surname": "Wolfe",
          "age": 28,
          "email": "marianne.wolfe@undefined.biz",
          "dateOfBirth": "2015-07-30T14:50:53.167Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Marquita",
          "surname": "Gillespie",
          "age": 22,
          "email": "marquita.gillespie@undefined.io",
          "dateOfBirth": "2017-06-15T16:27:58.860Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Langley",
          "surname": "Gill",
          "age": 37,
          "email": "langley.gill@undefined.name",
          "dateOfBirth": "2018-07-13T10:17:31.535Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Blevins",
          "surname": "Alford",
          "age": 28,
          "email": "blevins.alford@undefined.org",
          "dateOfBirth": "2015-10-27T03:39:22.601Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Henrietta",
          "surname": "Bruce",
          "age": 35,
          "email": "henrietta.bruce@undefined.co.uk",
          "dateOfBirth": "2017-03-24T08:28:54.765Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Snyder",
          "surname": "Guy",
          "age": 35,
          "email": "snyder.guy@undefined.us",
          "dateOfBirth": "2014-07-08T11:59:46.572Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Cotton",
          "surname": "Tyson",
          "age": 30,
          "email": "cotton.tyson@undefined.tv",
          "dateOfBirth": "2014-08-04T04:13:47.975Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Clarissa",
          "surname": "Hinton",
          "age": 25,
          "email": "clarissa.hinton@undefined.ca",
          "dateOfBirth": "2014-08-31T02:58:21.767Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Lara",
          "surname": "Velasquez",
          "age": 26,
          "email": "lara.velasquez@undefined.com",
          "dateOfBirth": "2016-11-20T13:31:43.897Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Bernadette",
          "surname": "Cox",
          "age": 20,
          "email": "bernadette.cox@undefined.info",
          "dateOfBirth": "2015-08-17T16:47:49.823Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Emerson",
          "surname": "Vincent",
          "age": 20,
          "email": "emerson.vincent@undefined.me",
          "dateOfBirth": "2016-11-21T18:33:38.593Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Clements",
          "surname": "Cunningham",
          "age": 33,
          "email": "clements.cunningham@undefined.biz",
          "dateOfBirth": "2017-01-24T07:45:51.720Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Trujillo",
          "surname": "Morrison",
          "age": 39,
          "email": "trujillo.morrison@undefined.biz",
          "dateOfBirth": "2015-01-30T22:56:02.610Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Kirk",
          "surname": "Mccullough",
          "age": 20,
          "email": "kirk.mccullough@undefined.io",
          "dateOfBirth": "2017-02-14T19:53:25.617Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "William",
          "surname": "Jimenez",
          "age": 29,
          "email": "william.jimenez@undefined.name",
          "dateOfBirth": "2016-05-09T11:11:50.266Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Charlene",
          "surname": "Manning",
          "age": 27,
          "email": "charlene.manning@undefined.org",
          "dateOfBirth": "2017-02-08T08:20:55.868Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Clay",
          "surname": "Hewitt",
          "age": 23,
          "email": "clay.hewitt@undefined.co.uk",
          "dateOfBirth": "2015-04-10T14:53:48.687Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Tanner",
          "surname": "Stuart",
          "age": 36,
          "email": "tanner.stuart@undefined.us",
          "dateOfBirth": "2014-02-05T05:06:45.076Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Fernandez",
          "surname": "Berger",
          "age": 21,
          "email": "fernandez.berger@undefined.tv",
          "dateOfBirth": "2017-07-05T04:27:01.369Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Huff",
          "surname": "Roberts",
          "age": 31,
          "email": "huff.roberts@undefined.ca",
          "dateOfBirth": "2018-08-31T08:38:22.377Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Long",
          "surname": "Pena",
          "age": 20,
          "email": "long.pena@undefined.com",
          "dateOfBirth": "2015-08-19T21:10:23.213Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Stacie",
          "surname": "Hill",
          "age": 24,
          "email": "stacie.hill@undefined.info",
          "dateOfBirth": "2016-02-19T19:19:02.661Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Hannah",
          "surname": "Parrish",
          "age": 36,
          "email": "hannah.parrish@undefined.me",
          "dateOfBirth": "2016-08-04T10:10:31.800Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Nelda",
          "surname": "Barron",
          "age": 35,
          "email": "nelda.barron@undefined.biz",
          "dateOfBirth": "2014-12-25T20:15:59.586Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Tania",
          "surname": "Tran",
          "age": 23,
          "email": "tania.tran@undefined.biz",
          "dateOfBirth": "2015-12-23T22:27:03.941Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Taylor",
          "surname": "Golden",
          "age": 20,
          "email": "taylor.golden@undefined.io",
          "dateOfBirth": "2014-04-21T15:40:07.822Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        },
        {
          "name": "Solis",
          "surname": "Tyler",
          "age": 38,
          "email": "solis.tyler@undefined.name",
          "dateOfBirth": "2014-12-23T20:38:31.025Z",
           "status": "Enabled", "picture": "http://placehold.it/32x32"
        }
    ];


    getData1(url: string,
            propertyNames: string[],
            propertyTypes: string[],
            sortStates: { 'propertyName': string , 'order': string}[],
            filters:any[],
            searchString: string) {

        console.log(url);
        console.log(propertyNames);
        console.log(propertyTypes);
        console.log(sortStates);
        console.log(filters);
        console.log(searchString);
 
        let data = this.data1;

    // Generic Search
    // TODO: Cater for Formatted Datatypes
    let temp = [];
    if (propertyNames.length > 0)  {
    for (let i = 0; i < propertyNames.length; i++) {
        if (propertyNames[i].length > 0) {
            temp = temp.concat(data.filter(x => String(x[propertyNames[i]]).indexOf(searchString) !== -1));
            data = data.filter(x => String(x[propertyNames[i]]).indexOf(searchString) === -1);
        }
    }

    data = temp;
  }

  console.log(filters.length);
    if (filters.length > 0)  {
      temp = [];

      for (let i = 0; i < filters.length; i++) {
        // If string
        if(propertyTypes[filters[i].index] == 'string') {
            temp = data.filter(x =>
                 String(x[propertyNames[filters[i].index]]).toLowerCase().indexOf(filters[i].data.value.toLowerCase()) !== -1);
        // If number
        } else if(propertyTypes[filters[i].index] == 'number') {
          // if both min and max specified
          if(filters[i].data.max && filters[i].data.min){
            temp = data.filter(x =>
                ((Number(x[propertyNames[filters[i].index]]) >= filters[i].data.min) &&
                 (Number(x[propertyNames[filters[i].index]]) <= filters[i].data.max)));
          // if max only specified
          } else if(filters[i].data.max) {
             temp = data.filter(x =>
                Number(x[propertyNames[filters[i].index]]) <= filters[i].data.max);
          // if only min specified
          } else if(filters[i].data.min) {
             temp = data.filter(x =>
                Number(x[propertyNames[filters[i].index]]) >= filters[i].data.min);
          // if nothing is specified
          } else  {
            temp = data;
          }
        }
            data = temp;
      }
      data = temp;
    }


    // Column Priority Sorting
    // TODO: Cater for Formatted Datatypes
    if (sortStates.length > 0) {
        let sortBy;
        for (let i = 0; i < sortStates.length; i++) {
            const order = (sortStates[i].order === 'Desc') ? -1 : 1;
            if (i === 0) {
                if (typeof data[0][sortStates[i].propertyName] === 'string') {
                    console.log('String firstBy:' + sortStates[i].propertyName);
                    sortBy = firstBy(sortStates[i].propertyName, {
                        ignoreCase: true,
                        direction: order
                    });
                } else if (typeof data[0][sortStates[i].propertyName] === 'number') {
                    sortBy = firstBy(function(v1, v2) {
                        return v1[sortStates[i].propertyName] - v2[sortStates[i].propertyName];
                    }, order);
                } else {
                    console.log('otherType sort:' + typeof data[0][sortStates[i].propertyName]);
                }
            } else {
                console.log('thenBy:' + sortStates[i].propertyName);
                if (typeof data[0][sortStates[i].propertyName] === 'string') {

                    sortBy = sortBy.thenBy(sortStates[i].propertyName, {
                        ignoreCase: true,
                        direction: order
                    });
                } else if (typeof data[0][sortStates[i].propertyName] === 'number') {
                    sortBy = sortBy.thenBy(function(v1, v2) {
                        return v1[sortStates[i].propertyName] - v2[sortStates[i].propertyName];
                    }, order);
                } else {
                    console.log('otherType sort');
                }
            }
        }
        data.sort(sortBy);
    }


  return data;
  }


    getData(table: FTable) {

      console.log(JSON.stringify(table));
      
      let data = this.data1;

      for (let i = 0; i < table.columns.length; i++) {
        if(table.columns[i].type == "checkbox") {
           // table.columns[i].filterData = [...new Set(data.map(x => x[table.columns[i].name]))];
            table.columns[i].filterData =Array.from(new Set(data.map(x => x[table.columns[i].name])))
        }
      }



      table.totalRows = data.length;
      // Generic Search
      // TODO: Cater for Formatted Datatypes
      if(table.search.value) {
        table.currentPage = 1;
      if (table.columns.length > 0) {
        let temp = [];
          for (let i = 0; i < table.columns.length; i++) {
              if (table.columns[i].name.length > 0) {
                  temp = temp.concat(data.filter(x => String(x[table.columns[i].name]).indexOf(table.search.value) !== -1));
                  data = data.filter(x => String(x[table.columns[i].name]).indexOf(table.search.value) === -1);
              }
          }

          data = temp;
      }
    }


      if (table.filters.length > 0) {
        table.currentPage = 1;
          for (let i = 0; i < table.filters.length; i++) {
              console.log("Filter:"+table.columns[table.filters[i].columnIndex].type);
              // If string
              if (table.columns[table.filters[i].columnIndex].type == 'string') {
                  data = data.filter(x =>
                      String(x[table.columns[table.filters[i].columnIndex].name])
                         .toLowerCase().indexOf( String(table.filters[i].search.value).toLowerCase()) !== -1);

                  console.log('string:'+String(table.filters[i].search.value).toLowerCase());
                  // If number
              } else if (table.columns[table.filters[i].columnIndex].type == 'number') {
                  // if both min and max specified
                  if (table.filters[i].search.value['max'] && table.filters[i].search.value['min']) {
                      data = data.filter(x =>
                          ((Number(x[table.columns[table.filters[i].columnIndex].name]) >= table.filters[i].search.value['min']) &&
                              (Number(x[table.columns[table.filters[i].columnIndex].name]) <= table.filters[i].search.value['max'])));
                      // if max only specified
                  } else if (table.filters[i].search.value['max']) {
                      data = data.filter(x =>
                          Number(x[table.columns[table.filters[i].columnIndex].name]) <= table.filters[i].search.value['max']);
                      // if only min specified
                  } else if (table.filters[i].search.value['min']) {
                      data = data.filter(x =>
                          Number(x[table.columns[table.filters[i].columnIndex].name]) >= table.filters[i].search.value['min']);
                      // if nothing is specified
                  } else {
                    //  temp = data;
                  }
              } else if (table.columns[table.filters[i].columnIndex].type == 'checkbox') {
                if (table.filters[i].search.value['checked'] == false) {
                  data = data.filter( x =>
                    String(x[table.columns[table.filters[i].columnIndex].name]) != table.filters[i].search.value['value']);
                }
              }
            //  data = temp;
          }
        //  data = temp;
      }


      // Column Priority Sorting
      // TODO: Cater for Formatted Datatypes
      if (table.orders.length> 0) {
          let sortBy;
          for (let i = 0; i < table.orders.length; i++) {
              const order = (table.orders[i].direction === 'Desc') ? -1 : 1;
              if (i === 0) {
                  if (typeof data[0][table.columns[table.orders[i].columnIndex].name] === 'string') {
                    //  console.log('String firstBy:' + table.columns[table.orders[i].columnIndex].name);
                      sortBy = firstBy(table.columns[table.orders[i].columnIndex].name, {
                          ignoreCase: true,
                          direction: order
                      });
                  } else if (typeof data[0][table.columns[table.orders[i].columnIndex].name] === 'number') {
                      sortBy = firstBy(function(v1, v2) {
                          return v1[table.columns[table.orders[i].columnIndex].name] - v2[table.columns[table.orders[i].columnIndex].name];
                      }, order);
                  } else {
                      console.log('otherType sort:' + typeof data[0][table.columns[table.orders[i].columnIndex].name]);
                  }
              } else {
                  console.log('thenBy:' + table.columns[table.orders[i].columnIndex].name);
                  if (typeof data[0][table.columns[table.orders[i].columnIndex].name] === 'string') {

                      sortBy = sortBy.thenBy(table.columns[table.orders[i].columnIndex].name, {
                          ignoreCase: true,
                          direction: order
                      });
                  } else if (typeof data[0][table.columns[table.orders[i].columnIndex].name] === 'number') {
                      sortBy = sortBy.thenBy(function(v1, v2) {
                          return v1[table.columns[table.orders[i].columnIndex].name] - v2[table.columns[table.orders[i].columnIndex].name];
                      }, order);
                  } else {
                      console.log('otherType sort');
                  }
              }
          }
          data.sort(sortBy);
      }

console.log("SIZE:"+table.currentPage + " " + table.pageSizes[table.pageSizeIndex]);
// this.page = this.data.slice(( this.currentPage - 1) * this.pageSize,  this.currentPage * this.pageSize);

      table.filteredRows = data.length;
      return data.slice((table.currentPage-1) * table.pageSizes[table.pageSizeIndex], (table.currentPage * (table.pageSizes[table.pageSizeIndex])));
  }

}