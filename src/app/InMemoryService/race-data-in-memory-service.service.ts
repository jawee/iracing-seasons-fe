import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Driver } from '../Model/driver';
import { Race } from '../Model/race';
import { Season } from '../Model/season';

export class RaceDataInMemoryServiceService implements InMemoryDbService {
  createDb() { 
    const standings = [{
        "27595": 22,
        "31968": 66,
        "37785": 134,
        "41060": 48,
        "47716": 70,
        "52848": 76,
        "59177": 64,
        "64920": 0,
        "69293": 0,
        "76416": 4,
        "80693": 112,
        "91787": 108,
        "108438": 42,
        "122653": 58,
        "124781": 134,
        "129837": 68,
        "131717": 8,
        "138213": 132,
        "140126": 38,
        "140209": 46,
        "143191": 176,
        "143617": 0,
        "152964": 8,
        "155240": 82,
        "159550": 88,
        "175014": 72,
        "175460": 0,
        "179485": 60,
        "184439": 92,
        "209962": 24,
        "210826": 54,
        "216544": 28,
        "229541": 90,
        "230212": 48,
        "230406": 16,
        "230647": 64,
        "231076": 108,
        "233357": 26,
        "233966": 100,
        "246119": 74,
        "248617": 76,
        "253695": 18,
        "266171": 84,
        "272595": 0,
        "278525": 0,
        "281548": 10,
        "287721": 104,
        "290615": 90,
        "290742": 152,
        "292923": 72,
        "293407": 40,
        "293441": 74,
        "298788": 80,
        "305621": 0,
        "312061": 30,
        "315937": 6,
        "319276": 38,
        "324435": 10,
        "331739": 36
    }]
    const drivers = [
        {
          "id": 54,
          "customerId": 233966,
          "name": "Josef F�llgren",
          "number": 10
        },
        {
          "id": 55,
          "customerId": 229541,
          "name": "Carl E Jansson",
          "number": 92
        },
        {
          "id": 56,
          "customerId": 155240,
          "name": "Robin Sundkvist",
          "number": 4
        },
        {
          "id": 57,
          "customerId": 143191,
          "name": "Wilhelm Wiberg",
          "number": 82
        },
        {
          "id": 58,
          "customerId": 292923,
          "name": "Stellan Lindeberg",
          "number": 968
        },
        {
          "id": 59,
          "customerId": 290742,
          "name": "Magnus Vallstr�m",
          "number": 666
        },
        {
          "id": 60,
          "customerId": 129837,
          "name": "Tobias olsson2",
          "number": 91
        },
        {
          "id": 61,
          "customerId": 37785,
          "name": "Jonas Bodin",
          "number": 177
        },
        {
          "id": 62,
          "customerId": 59177,
          "name": "Andreas Olsson",
          "number": 15
        },
        {
          "id": 63,
          "customerId": 138213,
          "name": "Victor Dravegard",
          "number": 23
        },
        {
          "id": 64,
          "customerId": 293441,
          "name": "Andreas Dahlstr�m",
          "number": 16
        },
        {
          "id": 65,
          "customerId": 246119,
          "name": "Tomas Andersson",
          "number": 34
        },
        {
          "id": 66,
          "customerId": 80693,
          "name": "Mattias Norling",
          "number": 36
        },
        {
          "id": 67,
          "customerId": 31968,
          "name": "Tony Cederholm",
          "number": 72
        },
        {
          "id": 68,
          "customerId": 287721,
          "name": "Alejandro Leiro",
          "number": 28
        },
        {
          "id": 69,
          "customerId": 266171,
          "name": "Jonas Melin",
          "number": 76
        },
        {
          "id": 70,
          "customerId": 41060,
          "name": "Jonny Wermelin",
          "number": 81
        },
        {
          "id": 71,
          "customerId": 290615,
          "name": "Jonas Simonsson",
          "number": 3
        },
        {
          "id": 72,
          "customerId": 124781,
          "name": "Marcus Simonsson",
          "number": 192
        },
        {
          "id": 73,
          "customerId": 91787,
          "name": "Philip Johansson",
          "number": 220
        },
        {
          "id": 74,
          "customerId": 52848,
          "name": "Rickard Allardh",
          "number": 74
        },
        {
          "id": 75,
          "customerId": 184439,
          "name": "Mikael Engstr�m",
          "number": 11
        },
        {
          "id": 76,
          "customerId": 140126,
          "name": "Sebastian Witkowski",
          "number": 704
        },
        {
          "id": 77,
          "customerId": 248617,
          "name": "Anders Wallgren",
          "number": 19
        },
        {
          "id": 78,
          "customerId": 231076,
          "name": "Mikael Engstroem",
          "number": 100
        },
        {
          "id": 79,
          "customerId": 159550,
          "name": "Robert B Eriksson",
          "number": 5
        },
        {
          "id": 80,
          "customerId": 216544,
          "name": "Daniel Sollo",
          "number": 215
        },
        {
          "id": 81,
          "customerId": 122653,
          "name": "Joel Voxberg",
          "number": 21
        },
        {
          "id": 82,
          "customerId": 47716,
          "name": "Andreas Lewau",
          "number": 123
        },
        {
          "id": 83,
          "customerId": 27595,
          "name": "Martin Simonsson",
          "number": 47
        },
        {
          "id": 84,
          "customerId": 140209,
          "name": "Mats Sjoblom",
          "number": 55
        },
        {
          "id": 85,
          "customerId": 298788,
          "name": "H�kan �gren",
          "number": 20
        },
        {
          "id": 86,
          "customerId": 230406,
          "name": "Fredrik Stertman",
          "number": 87
        },
        {
          "id": 87,
          "customerId": 331739,
          "name": "Christopher Haverland",
          "number": 175
        },
        {
          "id": 88,
          "customerId": 293407,
          "name": "Pontus Nilsson",
          "number": 79
        },
        {
          "id": 89,
          "customerId": 281548,
          "name": "Oliver Silva Barrera",
          "number": 43
        },
        {
          "id": 90,
          "customerId": 152964,
          "name": "Nicklas Gr�ns",
          "number": 17
        },
        {
          "id": 91,
          "customerId": 233357,
          "name": "Ola S�rnkvist",
          "number": 70
        },
        {
          "id": 92,
          "customerId": 210826,
          "name": "Magnus Asp",
          "number": 2
        },
        {
          "id": 93,
          "customerId": 108438,
          "name": "Kent Suroto",
          "number": 48
        },
        {
          "id": 94,
          "customerId": 278525,
          "name": "Lars Rystedt",
          "number": 99
        },
        {
          "id": 95,
          "customerId": 312061,
          "name": "Albin Nystr�m",
          "number": 310
        },
        {
          "id": 96,
          "customerId": 230212,
          "name": "Anton Karlsson",
          "number": 32
        },
        {
          "id": 97,
          "customerId": 175460,
          "name": "Joakim Svensson",
          "number": 119
        },
        {
          "id": 98,
          "customerId": 69293,
          "name": "Robin Bandgren",
          "number": 77
        },
        {
          "id": 99,
          "customerId": 305621,
          "name": "Jhon Solarte",
          "number": 8
        },
        {
          "id": 100,
          "customerId": 253695,
          "name": "Tommy Lindkvist",
          "number": 13
        },
        {
          "id": 101,
          "customerId": 143617,
          "name": "Henrik Lindoff",
          "number": 8
        },
        {
          "id": 102,
          "customerId": 175014,
          "name": "Joachim Ljunggren",
          "number": 64
        },
        {
          "id": 103,
          "customerId": 319276,
          "name": "Harri Kjellin",
          "number": 75
        },
        {
          "id": 104,
          "customerId": 324435,
          "name": "Philip Larsson",
          "number": 18
        },
        {
          "id": 105,
          "customerId": 76416,
          "name": "Peter Johansson",
          "number": 62
        },
        {
          "id": 106,
          "customerId": 272595,
          "name": "Tommie Aalto",
          "number": 24
        },
        {
          "id": 107,
          "customerId": 230647,
          "name": "Michael Haflidason",
          "number": 811
        },
        {
          "id": 108,
          "customerId": 179485,
          "name": "Daniel �hrn",
          "number": 14
        },
        {
          "id": 109,
          "customerId": 209962,
          "name": "Linus Areng",
          "number": 33
        },
        {
          "id": 110,
          "customerId": 131717,
          "name": "Fredrik Neptun",
          "number": 7
        },
        {
          "id": 111,
          "customerId": 315937,
          "name": "Timmy Nylander",
          "number": 456
        },
        {
          "id": 112,
          "customerId": 64920,
          "name": "TK Yasagac",
          "number": 321
        }
      ]
    const seasons = [
        {
          "id": 4,
          "name": "Season 01",
          "startDate": "2018-10-02T08:00:00",
          "endDate": "2018-12-31T08:00:00",
          "races": [
            {
              "id": 8,
              "track": "Phillip Island Circui",
              "seasonId": 4,
              "raceNumber": 1,
              "raceType": 0,
              "raceRows": null
            },
            {
              "id": 9,
              "track": "Suzuka International Racing Course - Grand Prix",
              "seasonId": 4,
              "raceNumber": 2,
              "raceType": 2,
              "raceRows": null
            }
          ]
        }
      ]
    const races = [
      {
          "id": 8,
          "track": "Phillip Island Circui",
          "seasonId": 4,
          "season": null,
          "raceNumber": 1,
          "raceType": 0,
          "raceRows": [
              {
                  "id": 160,
                  "car": "Ferrari 488 GTE",
                  "position": 1,
                  "startPosition": 1,
                  "incidents": 3,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 54,
                  "driver": null
              },
              {
                  "id": 161,
                  "car": "Ford GT - 2017",
                  "position": 2,
                  "startPosition": 4,
                  "incidents": 8,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 55,
                  "driver": null
              },
              {
                  "id": 162,
                  "car": "Ford GT - 2017",
                  "position": 3,
                  "startPosition": 3,
                  "incidents": 4,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 56,
                  "driver": null
              },
              {
                  "id": 163,
                  "car": "Porsche 911 RSR",
                  "position": 4,
                  "startPosition": 2,
                  "incidents": 2,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 57,
                  "driver": null
              },
              {
                  "id": 164,
                  "car": "Ferrari 488 GTE",
                  "position": 5,
                  "startPosition": 5,
                  "incidents": 2,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 58,
                  "driver": null
              },
              {
                  "id": 165,
                  "car": "Porsche 911 RSR",
                  "position": 6,
                  "startPosition": 6,
                  "incidents": 0,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 59,
                  "driver": null
              },
              {
                  "id": 166,
                  "car": "Porsche 911 RSR",
                  "position": 7,
                  "startPosition": 11,
                  "incidents": 12,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 60,
                  "driver": null
              },
              {
                  "id": 167,
                  "car": "Ferrari 488 GTE",
                  "position": 8,
                  "startPosition": 8,
                  "incidents": 2,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 61,
                  "driver": null
              },
              {
                  "id": 168,
                  "car": "Ferrari 488 GTE",
                  "position": 9,
                  "startPosition": 12,
                  "incidents": 3,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 62,
                  "driver": null
              },
              {
                  "id": 169,
                  "car": "Porsche 911 RSR",
                  "position": 10,
                  "startPosition": 9,
                  "incidents": 7,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 63,
                  "driver": null
              },
              {
                  "id": 170,
                  "car": "Ferrari 488 GTE",
                  "position": 11,
                  "startPosition": 10,
                  "incidents": 7,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 64,
                  "driver": null
              },
              {
                  "id": 171,
                  "car": "Porsche 911 RSR",
                  "position": 12,
                  "startPosition": 23,
                  "incidents": 2,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 65,
                  "driver": null
              },
              {
                  "id": 172,
                  "car": "Ferrari 488 GTE",
                  "position": 13,
                  "startPosition": 16,
                  "incidents": 9,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 66,
                  "driver": null
              },
              {
                  "id": 173,
                  "car": "Porsche 911 RSR",
                  "position": 14,
                  "startPosition": 14,
                  "incidents": 9,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 67,
                  "driver": null
              },
              {
                  "id": 174,
                  "car": "Porsche 911 RSR",
                  "position": 15,
                  "startPosition": 28,
                  "incidents": 10,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 68,
                  "driver": null
              },
              {
                  "id": 175,
                  "car": "Porsche 911 RSR",
                  "position": 16,
                  "startPosition": 25,
                  "incidents": 10,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 69,
                  "driver": null
              },
              {
                  "id": 176,
                  "car": "Porsche 911 RSR",
                  "position": 17,
                  "startPosition": 31,
                  "incidents": 2,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 70,
                  "driver": null
              },
              {
                  "id": 177,
                  "car": "Porsche 911 RSR",
                  "position": 18,
                  "startPosition": 21,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 71,
                  "driver": null
              },
              {
                  "id": 178,
                  "car": "Porsche 911 RSR",
                  "position": 19,
                  "startPosition": 19,
                  "incidents": 8,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 72,
                  "driver": null
              },
              {
                  "id": 179,
                  "car": "Porsche 911 RSR",
                  "position": 20,
                  "startPosition": 13,
                  "incidents": 13,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 73,
                  "driver": null
              },
              {
                  "id": 180,
                  "car": "Ford GT - 2017",
                  "position": 21,
                  "startPosition": 15,
                  "incidents": 13,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 74,
                  "driver": null
              },
              {
                  "id": 181,
                  "car": "Ferrari 488 GTE",
                  "position": 22,
                  "startPosition": 30,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 75,
                  "driver": null
              },
              {
                  "id": 182,
                  "car": "Porsche 911 RSR",
                  "position": 23,
                  "startPosition": 36,
                  "incidents": 16,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 76,
                  "driver": null
              },
              {
                  "id": 183,
                  "car": "Porsche 911 RSR",
                  "position": 24,
                  "startPosition": 29,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 77,
                  "driver": null
              },
              {
                  "id": 184,
                  "car": "Porsche 911 RSR",
                  "position": 25,
                  "startPosition": 26,
                  "incidents": 10,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 78,
                  "driver": null
              },
              {
                  "id": 185,
                  "car": "Ford GT - 2017",
                  "position": 26,
                  "startPosition": 53,
                  "incidents": 12,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 79,
                  "driver": null
              },
              {
                  "id": 186,
                  "car": "Ford GT - 2017",
                  "position": 27,
                  "startPosition": 39,
                  "incidents": 8,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 80,
                  "driver": null
              },
              {
                  "id": 187,
                  "car": "Ford GT - 2017",
                  "position": 28,
                  "startPosition": 24,
                  "incidents": 12,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 81,
                  "driver": null
              },
              {
                  "id": 188,
                  "car": "Ferrari 488 GTE",
                  "position": 29,
                  "startPosition": 46,
                  "incidents": 4,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 82,
                  "driver": null
              },
              {
                  "id": 189,
                  "car": "Porsche 911 RSR",
                  "position": 30,
                  "startPosition": 41,
                  "incidents": 3,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 83,
                  "driver": null
              },
              {
                  "id": 190,
                  "car": "Porsche 911 RSR",
                  "position": 31,
                  "startPosition": 40,
                  "incidents": 8,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 84,
                  "driver": null
              },
              {
                  "id": 191,
                  "car": "Porsche 911 RSR",
                  "position": 32,
                  "startPosition": 32,
                  "incidents": 16,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 85,
                  "driver": null
              },
              {
                  "id": 192,
                  "car": "Porsche 911 RSR",
                  "position": 33,
                  "startPosition": 22,
                  "incidents": 12,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 86,
                  "driver": null
              },
              {
                  "id": 193,
                  "car": "Porsche 911 RSR",
                  "position": 34,
                  "startPosition": 50,
                  "incidents": 12,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 87,
                  "driver": null
              },
              {
                  "id": 194,
                  "car": "Ferrari 488 GTE",
                  "position": 35,
                  "startPosition": 42,
                  "incidents": 14,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 88,
                  "driver": null
              },
              {
                  "id": 195,
                  "car": "Porsche 911 RSR",
                  "position": 36,
                  "startPosition": 37,
                  "incidents": 15,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 89,
                  "driver": null
              },
              {
                  "id": 196,
                  "car": "Ferrari 488 GTE",
                  "position": 37,
                  "startPosition": 48,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 90,
                  "driver": null
              },
              {
                  "id": 197,
                  "car": "Porsche 911 RSR",
                  "position": 38,
                  "startPosition": 47,
                  "incidents": 18,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 91,
                  "driver": null
              },
              {
                  "id": 198,
                  "car": "Ferrari 488 GTE",
                  "position": 39,
                  "startPosition": 34,
                  "incidents": 8,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 92,
                  "driver": null
              },
              {
                  "id": 199,
                  "car": "Ford GT - 2017",
                  "position": 40,
                  "startPosition": 27,
                  "incidents": 2,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 93,
                  "driver": null
              },
              {
                  "id": 200,
                  "car": "Porsche 911 RSR",
                  "position": 41,
                  "startPosition": 49,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 94,
                  "driver": null
              },
              {
                  "id": 201,
                  "car": "Ferrari 488 GTE",
                  "position": 42,
                  "startPosition": 44,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 95,
                  "driver": null
              },
              {
                  "id": 202,
                  "car": "Porsche 911 RSR",
                  "position": 43,
                  "startPosition": 18,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 96,
                  "driver": null
              },
              {
                  "id": 203,
                  "car": "Ferrari 488 GTE",
                  "position": 44,
                  "startPosition": 33,
                  "incidents": 16,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 97,
                  "driver": null
              },
              {
                  "id": 204,
                  "car": "Porsche 911 RSR",
                  "position": 45,
                  "startPosition": 43,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 98,
                  "driver": null
              },
              {
                  "id": 205,
                  "car": "Ford GT - 2017",
                  "position": 46,
                  "startPosition": 51,
                  "incidents": 14,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 99,
                  "driver": null
              },
              {
                  "id": 206,
                  "car": "Porsche 911 RSR",
                  "position": 47,
                  "startPosition": 17,
                  "incidents": 18,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 100,
                  "driver": null
              },
              {
                  "id": 207,
                  "car": "Ferrari 488 GTE",
                  "position": 48,
                  "startPosition": 7,
                  "incidents": 4,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 101,
                  "driver": null
              },
              {
                  "id": 208,
                  "car": "Ferrari 488 GTE",
                  "position": 49,
                  "startPosition": 20,
                  "incidents": 4,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 102,
                  "driver": null
              },
              {
                  "id": 209,
                  "car": "Ferrari 488 GTE",
                  "position": 50,
                  "startPosition": 35,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 103,
                  "driver": null
              },
              {
                  "id": 210,
                  "car": "Ferrari 488 GTE",
                  "position": 51,
                  "startPosition": 45,
                  "incidents": 10,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 104,
                  "driver": null
              },
              {
                  "id": 211,
                  "car": "Porsche 911 RSR",
                  "position": 52,
                  "startPosition": 38,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 105,
                  "driver": null
              },
              {
                  "id": 212,
                  "car": "Porsche 911 RSR",
                  "position": 53,
                  "startPosition": 52,
                  "incidents": 0,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 8,
                  "driverId": 106,
                  "driver": null
              }
          ]
      },
      {
          "id": 9,
          "track": "Suzuka International Racing Course - Grand Prix",
          "seasonId": 4,
          "season": null,
          "raceNumber": 2,
          "raceType": 2,
          "raceRows": [
              {
                  "id": 213,
                  "car": "Porsche 911 RSR",
                  "position": 1,
                  "startPosition": 1,
                  "incidents": 8,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 57,
                  "driver": null
              },
              {
                  "id": 214,
                  "car": "Porsche 911 RSR",
                  "position": 2,
                  "startPosition": 5,
                  "incidents": 7,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 72,
                  "driver": null
              },
              {
                  "id": 215,
                  "car": "Porsche 911 RSR",
                  "position": 3,
                  "startPosition": 3,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 59,
                  "driver": null
              },
              {
                  "id": 216,
                  "car": "Porsche 911 RSR",
                  "position": 4,
                  "startPosition": 4,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 78,
                  "driver": null
              },
              {
                  "id": 217,
                  "car": "Ferrari 488 GTE",
                  "position": 5,
                  "startPosition": 8,
                  "incidents": 5,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 102,
                  "driver": null
              },
              {
                  "id": 218,
                  "car": "Porsche 911 RSR",
                  "position": 6,
                  "startPosition": 10,
                  "incidents": 8,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 63,
                  "driver": null
              },
              {
                  "id": 219,
                  "car": "Ferrari 488 GTE",
                  "position": 7,
                  "startPosition": 6,
                  "incidents": 14,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 61,
                  "driver": null
              },
              {
                  "id": 220,
                  "car": "Porsche 911 RSR",
                  "position": 8,
                  "startPosition": 7,
                  "incidents": 9,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 73,
                  "driver": null
              },
              {
                  "id": 221,
                  "car": "Ferrari 488 GTE",
                  "position": 9,
                  "startPosition": 15,
                  "incidents": 16,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 107,
                  "driver": null
              },
              {
                  "id": 222,
                  "car": "Porsche 911 RSR",
                  "position": 10,
                  "startPosition": 12,
                  "incidents": 9,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 85,
                  "driver": null
              },
              {
                  "id": 223,
                  "car": "Porsche 911 RSR",
                  "position": 11,
                  "startPosition": 14,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 108,
                  "driver": null
              },
              {
                  "id": 224,
                  "car": "Ford GT - 2017",
                  "position": 12,
                  "startPosition": 21,
                  "incidents": 10,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 79,
                  "driver": null
              },
              {
                  "id": 225,
                  "car": "Ferrari 488 GTE",
                  "position": 13,
                  "startPosition": 20,
                  "incidents": 5,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 66,
                  "driver": null
              },
              {
                  "id": 226,
                  "car": "Ferrari 488 GTE",
                  "position": 14,
                  "startPosition": 13,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 75,
                  "driver": null
              },
              {
                  "id": 227,
                  "car": "Porsche 911 RSR",
                  "position": 15,
                  "startPosition": 16,
                  "incidents": 10,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 68,
                  "driver": null
              },
              {
                  "id": 228,
                  "car": "Ferrari 488 GTE",
                  "position": 16,
                  "startPosition": 9,
                  "incidents": 15,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 92,
                  "driver": null
              },
              {
                  "id": 229,
                  "car": "Porsche 911 RSR",
                  "position": 17,
                  "startPosition": 19,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 96,
                  "driver": null
              },
              {
                  "id": 230,
                  "car": "Ferrari 488 GTE",
                  "position": 18,
                  "startPosition": 18,
                  "incidents": 7,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 82,
                  "driver": null
              },
              {
                  "id": 231,
                  "car": "Porsche 911 RSR",
                  "position": 19,
                  "startPosition": 23,
                  "incidents": 16,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 71,
                  "driver": null
              },
              {
                  "id": 232,
                  "car": "Porsche 911 RSR",
                  "position": 20,
                  "startPosition": 30,
                  "incidents": 5,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 77,
                  "driver": null
              },
              {
                  "id": 233,
                  "car": "Ford GT - 2017",
                  "position": 21,
                  "startPosition": 17,
                  "incidents": 3,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 93,
                  "driver": null
              },
              {
                  "id": 234,
                  "car": "Ferrari 488 GTE",
                  "position": 22,
                  "startPosition": 28,
                  "incidents": 5,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 103,
                  "driver": null
              },
              {
                  "id": 235,
                  "car": "Ford GT - 2017",
                  "position": 23,
                  "startPosition": 11,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 74,
                  "driver": null
              },
              {
                  "id": 236,
                  "car": "Porsche 911 RSR",
                  "position": 24,
                  "startPosition": 26,
                  "incidents": 3,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 69,
                  "driver": null
              },
              {
                  "id": 237,
                  "car": "Ford GT - 2017",
                  "position": 25,
                  "startPosition": 22,
                  "incidents": 15,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 81,
                  "driver": null
              },
              {
                  "id": 238,
                  "car": "Ferrari 488 GTE",
                  "position": 26,
                  "startPosition": 32,
                  "incidents": 15,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 95,
                  "driver": null
              },
              {
                  "id": 239,
                  "car": "Ferrari 488 GTE",
                  "position": 27,
                  "startPosition": 33,
                  "incidents": 9,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 88,
                  "driver": null
              },
              {
                  "id": 240,
                  "car": "Ferrari 488 GTE",
                  "position": 28,
                  "startPosition": 38,
                  "incidents": 15,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 84,
                  "driver": null
              },
              {
                  "id": 241,
                  "car": "Ferrari 488 GTE",
                  "position": 29,
                  "startPosition": 24,
                  "incidents": 17,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 109,
                  "driver": null
              },
              {
                  "id": 242,
                  "car": "Porsche 911 RSR",
                  "position": 30,
                  "startPosition": 37,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 87,
                  "driver": null
              },
              {
                  "id": 243,
                  "car": "Porsche 911 RSR",
                  "position": 31,
                  "startPosition": 39,
                  "incidents": 16,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 91,
                  "driver": null
              },
              {
                  "id": 244,
                  "car": "Porsche 911 RSR",
                  "position": 32,
                  "startPosition": 27,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 100,
                  "driver": null
              },
              {
                  "id": 245,
                  "car": "Porsche 911 RSR",
                  "position": 33,
                  "startPosition": 40,
                  "incidents": 15,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 65,
                  "driver": null
              },
              {
                  "id": 246,
                  "car": "Ferrari 488 GTE",
                  "position": 34,
                  "startPosition": 2,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 64,
                  "driver": null
              },
              {
                  "id": 247,
                  "car": "Porsche 911 RSR",
                  "position": 35,
                  "startPosition": 25,
                  "incidents": 8,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 67,
                  "driver": null
              },
              {
                  "id": 248,
                  "car": "Ferrari 488 GTE",
                  "position": 36,
                  "startPosition": 36,
                  "incidents": 7,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 104,
                  "driver": null
              },
              {
                  "id": 249,
                  "car": "Ford GT - 2017",
                  "position": 37,
                  "startPosition": 35,
                  "incidents": 6,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 110,
                  "driver": null
              },
              {
                  "id": 250,
                  "car": "Ferrari 488 GTE",
                  "position": 38,
                  "startPosition": 41,
                  "incidents": 11,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 111,
                  "driver": null
              },
              {
                  "id": 251,
                  "car": "Porsche 911 RSR",
                  "position": 39,
                  "startPosition": 31,
                  "incidents": 5,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 105,
                  "driver": null
              },
              {
                  "id": 252,
                  "car": "Porsche 911 RSR",
                  "position": 40,
                  "startPosition": 29,
                  "incidents": 7,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 76,
                  "driver": null
              },
              {
                  "id": 253,
                  "car": "Ferrari 488 GTE",
                  "position": 41,
                  "startPosition": 34,
                  "incidents": 4,
                  "points": 0,
                  "infractionPoints": 0,
                  "penaltyPoints": 0,
                  "raceId": 9,
                  "driverId": 112,
                  "driver": null
              }
          ]
      }
  ];
    return {seasons, races, drivers, standings};
  }
  constructor() { }

  genId<T extends Driver | Season | Race>(myTable: T[]): number {
    console.log("Creating id for new element");
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}