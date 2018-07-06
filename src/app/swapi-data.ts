import { Injectable } from '@angular/core';

@Injectable()
export class SwapiData {
  planets: any[] = [
    {
      'name': 'Corellia',
      'rotation_period': '25',
      'orbital_period': '329',
      'diameter': '11000',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'plains, urban, hills, forests',
      'surface_water': '70',
      'population': '3000000000',
      'residents': [
        'http://swapi.co/api/people/14/',
        'http://swapi.co/api/people/18/'
      ],
      'films': [],
      'created': '2014-12-10T16:49:12.453000Z',
      'edited': '2014-12-20T20:58:18.456000Z',
      'url': 'http://swapi.co/api/planets/22/'
    },
    {
      'name': 'Rodia',
      'rotation_period': '29',
      'orbital_period': '305',
      'diameter': '7549',
      'climate': 'hot',
      'gravity': '1 standard',
      'terrain': 'jungles, oceans, urban, swamps',
      'surface_water': '60',
      'population': '1300000000',
      'residents': [
        'http://swapi.co/api/people/15/'
      ],
      'films': [],
      'created': '2014-12-10T17:03:28.110000Z',
      'edited': '2014-12-20T20:58:18.458000Z',
      'url': 'http://swapi.co/api/planets/23/'
    },
    {
      'name': 'Nal Hutta',
      'rotation_period': '87',
      'orbital_period': '413',
      'diameter': '12150',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'urban, oceans, swamps, bogs',
      'surface_water': 'unknown',
      'population': '7000000000',
      'residents': [
        'http://swapi.co/api/people/16/'
      ],
      'films': [],
      'created': '2014-12-10T17:11:29.452000Z',
      'edited': '2014-12-20T20:58:18.460000Z',
      'url': 'http://swapi.co/api/planets/24/'
    },
    {
      'name': 'Dantooine',
      'rotation_period': '25',
      'orbital_period': '378',
      'diameter': '9830',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'oceans, savannas, mountains, grasslands',
      'surface_water': 'unknown',
      'population': '1000',
      'residents': [],
      'films': [],
      'created': '2014-12-10T17:23:29.896000Z',
      'edited': '2014-12-20T20:58:18.461000Z',
      'url': 'http://swapi.co/api/planets/25/'
    },
    {
      'name': 'Bestine IV',
      'rotation_period': '26',
      'orbital_period': '680',
      'diameter': '6400',
      'climate': 'temperate',
      'gravity': 'unknown',
      'terrain': 'rocky islands, oceans',
      'surface_water': '98',
      'population': '62000000',
      'residents': [
        'http://swapi.co/api/people/19/'
      ],
      'films': [],
      'created': '2014-12-12T11:16:55.078000Z',
      'edited': '2014-12-20T20:58:18.463000Z',
      'url': 'http://swapi.co/api/planets/26/'
    },
    {
      'name': 'Ord Mantell',
      'rotation_period': '26',
      'orbital_period': '334',
      'diameter': '14050',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'plains, seas, mesas',
      'surface_water': '10',
      'population': '4000000000',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/2/'
      ],
      'created': '2014-12-15T12:23:41.661000Z',
      'edited': '2014-12-20T20:58:18.464000Z',
      'url': 'http://swapi.co/api/planets/27/'
    },
    {
      'name': 'unknown',
      'rotation_period': '0',
      'orbital_period': '0',
      'diameter': '0',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'unknown',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/20/',
        'http://swapi.co/api/people/23/',
        'http://swapi.co/api/people/29/',
        'http://swapi.co/api/people/32/',
        'http://swapi.co/api/people/75/',
        'http://swapi.co/api/people/84/',
        'http://swapi.co/api/people/85/',
        'http://swapi.co/api/people/86/',
        'http://swapi.co/api/people/87/',
        'http://swapi.co/api/people/88/'
      ],
      'films': [],
      'created': '2014-12-15T12:25:59.569000Z',
      'edited': '2014-12-20T20:58:18.466000Z',
      'url': 'http://swapi.co/api/planets/28/'
    },
    {
      'name': 'Trandosha',
      'rotation_period': '25',
      'orbital_period': '371',
      'diameter': '0',
      'climate': 'arid',
      'gravity': '0.62 standard',
      'terrain': 'mountains, seas, grasslands, deserts',
      'surface_water': 'unknown',
      'population': '42000000',
      'residents': [
        'http://swapi.co/api/people/24/'
      ],
      'films': [],
      'created': '2014-12-15T12:53:47.695000Z',
      'edited': '2014-12-20T20:58:18.468000Z',
      'url': 'http://swapi.co/api/planets/29/'
    },
    {
      'name': 'Socorro',
      'rotation_period': '20',
      'orbital_period': '326',
      'diameter': '0',
      'climate': 'arid',
      'gravity': '1 standard',
      'terrain': 'deserts, mountains',
      'surface_water': 'unknown',
      'population': '300000000',
      'residents': [
        'http://swapi.co/api/people/25/'
      ],
      'films': [],
      'created': '2014-12-15T12:56:31.121000Z',
      'edited': '2014-12-20T20:58:18.469000Z',
      'url': 'http://swapi.co/api/planets/30/'
    },
    {
      'name': 'Mon Cala',
      'rotation_period': '21',
      'orbital_period': '398',
      'diameter': '11030',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'oceans, reefs, islands',
      'surface_water': '100',
      'population': '27000000000',
      'residents': [
        'http://swapi.co/api/people/27/'
      ],
      'films': [],
      'created': '2014-12-18T11:07:01.792000Z',
      'edited': '2014-12-20T20:58:18.471000Z',
      'url': 'http://swapi.co/api/planets/31/'
    },
    {
      'name': 'Alderaan',
      'rotation_period': '24',
      'orbital_period': '364',
      'diameter': '12500',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'grasslands, mountains',
      'surface_water': '40',
      'population': '2000000000',
      'residents': [
        'http://swapi.co/api/people/5/',
        'http://swapi.co/api/people/68/',
        'http://swapi.co/api/people/81/'
      ],
      'films': [
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/1/'
      ],
      'created': '2014-12-10T11:35:48.479000Z',
      'edited': '2014-12-20T20:58:18.420000Z',
      'url': 'http://swapi.co/api/planets/2/'
    },
    {
      'name': 'Yavin IV',
      'rotation_period': '24',
      'orbital_period': '4818',
      'diameter': '10200',
      'climate': 'temperate, tropical',
      'gravity': '1 standard',
      'terrain': 'jungle, rainforests',
      'surface_water': '8',
      'population': '1000',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/1/'
      ],
      'created': '2014-12-10T11:37:19.144000Z',
      'edited': '2014-12-20T20:58:18.421000Z',
      'url': 'http://swapi.co/api/planets/3/'
    },
    {
      'name': 'Hoth',
      'rotation_period': '23',
      'orbital_period': '549',
      'diameter': '7200',
      'climate': 'frozen',
      'gravity': '1.1 standard',
      'terrain': 'tundra, ice caves, mountain ranges',
      'surface_water': '100',
      'population': 'unknown',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/2/'
      ],
      'created': '2014-12-10T11:39:13.934000Z',
      'edited': '2014-12-20T20:58:18.423000Z',
      'url': 'http://swapi.co/api/planets/4/'
    },
    {
      'name': 'Dagobah',
      'rotation_period': '23',
      'orbital_period': '341',
      'diameter': '8900',
      'climate': 'murky',
      'gravity': 'N/A',
      'terrain': 'swamp, jungles',
      'surface_water': '8',
      'population': 'unknown',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/'
      ],
      'created': '2014-12-10T11:42:22.590000Z',
      'edited': '2014-12-20T20:58:18.425000Z',
      'url': 'http://swapi.co/api/planets/5/'
    },
    {
      'name': 'Bespin',
      'rotation_period': '12',
      'orbital_period': '5110',
      'diameter': '118000',
      'climate': 'temperate',
      'gravity': '1.5 (surface), 1 standard (Cloud City)',
      'terrain': 'gas giant',
      'surface_water': '0',
      'population': '6000000',
      'residents': [
        'http://swapi.co/api/people/26/'
      ],
      'films': [
        'http://swapi.co/api/films/2/'
      ],
      'created': '2014-12-10T11:43:55.240000Z',
      'edited': '2014-12-20T20:58:18.427000Z',
      'url': 'http://swapi.co/api/planets/6/'
    },
    {
      'name': 'Endor',
      'rotation_period': '18',
      'orbital_period': '402',
      'diameter': '4900',
      'climate': 'temperate',
      'gravity': '0.85 standard',
      'terrain': 'forests, mountains, lakes',
      'surface_water': '8',
      'population': '30000000',
      'residents': [
        'http://swapi.co/api/people/30/'
      ],
      'films': [
        'http://swapi.co/api/films/3/'
      ],
      'created': '2014-12-10T11:50:29.349000Z',
      'edited': '2014-12-20T20:58:18.429000Z',
      'url': 'http://swapi.co/api/planets/7/'
    },
    {
      'name': 'Naboo',
      'rotation_period': '26',
      'orbital_period': '312',
      'diameter': '12120',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'grassy hills, swamps, forests, mountains',
      'surface_water': '12',
      'population': '4500000000',
      'residents': [
        'http://swapi.co/api/people/3/',
        'http://swapi.co/api/people/21/',
        'http://swapi.co/api/people/36/',
        'http://swapi.co/api/people/37/',
        'http://swapi.co/api/people/38/',
        'http://swapi.co/api/people/39/',
        'http://swapi.co/api/people/42/',
        'http://swapi.co/api/people/60/',
        'http://swapi.co/api/people/61/',
        'http://swapi.co/api/people/66/',
        'http://swapi.co/api/people/35/'
      ],
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/'
      ],
      'created': '2014-12-10T11:52:31.066000Z',
      'edited': '2014-12-20T20:58:18.430000Z',
      'url': 'http://swapi.co/api/planets/8/'
    },
    {
      'name': 'Coruscant',
      'rotation_period': '24',
      'orbital_period': '368',
      'diameter': '12240',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'cityscape, mountains',
      'surface_water': 'unknown',
      'population': '1000000000000',
      'residents': [
        'http://swapi.co/api/people/34/',
        'http://swapi.co/api/people/55/',
        'http://swapi.co/api/people/74/'
      ],
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/'
      ],
      'created': '2014-12-10T11:54:13.921000Z',
      'edited': '2014-12-20T20:58:18.432000Z',
      'url': 'http://swapi.co/api/planets/9/'
    },
    {
      'name': 'Kamino',
      'rotation_period': '27',
      'orbital_period': '463',
      'diameter': '19720',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'ocean',
      'surface_water': '100',
      'population': '1000000000',
      'residents': [
        'http://swapi.co/api/people/22/',
        'http://swapi.co/api/people/72/',
        'http://swapi.co/api/people/73/'
      ],
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'created': '2014-12-10T12:45:06.577000Z',
      'edited': '2014-12-20T20:58:18.434000Z',
      'url': 'http://swapi.co/api/planets/10/'
    },
    {
      'name': 'Geonosis',
      'rotation_period': '30',
      'orbital_period': '256',
      'diameter': '11370',
      'climate': 'temperate, arid',
      'gravity': '0.9 standard',
      'terrain': 'rock, desert, mountain, barren',
      'surface_water': '5',
      'population': '100000000000',
      'residents': [
        'http://swapi.co/api/people/63/'
      ],
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'created': '2014-12-10T12:47:22.350000Z',
      'edited': '2014-12-20T20:58:18.437000Z',
      'url': 'http://swapi.co/api/planets/11/'
    },
    {
      'name': 'Chandrila',
      'rotation_period': '20',
      'orbital_period': '368',
      'diameter': '13500',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'plains, forests',
      'surface_water': '40',
      'population': '1200000000',
      'residents': [
        'http://swapi.co/api/people/28/'
      ],
      'films': [],
      'created': '2014-12-18T11:11:51.872000Z',
      'edited': '2014-12-20T20:58:18.472000Z',
      'url': 'http://swapi.co/api/planets/32/'
    },
    {
      'name': 'Sullust',
      'rotation_period': '20',
      'orbital_period': '263',
      'diameter': '12780',
      'climate': 'superheated',
      'gravity': '1',
      'terrain': 'mountains, volcanoes, rocky deserts',
      'surface_water': '5',
      'population': '18500000000',
      'residents': [
        'http://swapi.co/api/people/31/'
      ],
      'films': [],
      'created': '2014-12-18T11:25:40.243000Z',
      'edited': '2014-12-20T20:58:18.474000Z',
      'url': 'http://swapi.co/api/planets/33/'
    },
    {
      'name': 'Toydaria',
      'rotation_period': '21',
      'orbital_period': '184',
      'diameter': '7900',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'swamps, lakes',
      'surface_water': 'unknown',
      'population': '11000000',
      'residents': [
        'http://swapi.co/api/people/40/'
      ],
      'films': [],
      'created': '2014-12-19T17:47:54.403000Z',
      'edited': '2014-12-20T20:58:18.476000Z',
      'url': 'http://swapi.co/api/planets/34/'
    },
    {
      'name': 'Malastare',
      'rotation_period': '26',
      'orbital_period': '201',
      'diameter': '18880',
      'climate': 'arid, temperate, tropical',
      'gravity': '1.56',
      'terrain': 'swamps, deserts, jungles, mountains',
      'surface_water': 'unknown',
      'population': '2000000000',
      'residents': [
        'http://swapi.co/api/people/41/'
      ],
      'films': [],
      'created': '2014-12-19T17:52:13.106000Z',
      'edited': '2014-12-20T20:58:18.478000Z',
      'url': 'http://swapi.co/api/planets/35/'
    },
    {
      'name': 'Dathomir',
      'rotation_period': '24',
      'orbital_period': '491',
      'diameter': '10480',
      'climate': 'temperate',
      'gravity': '0.9',
      'terrain': 'forests, deserts, savannas',
      'surface_water': 'unknown',
      'population': '5200',
      'residents': [
        'http://swapi.co/api/people/44/'
      ],
      'films': [],
      'created': '2014-12-19T18:00:40.142000Z',
      'edited': '2014-12-20T20:58:18.480000Z',
      'url': 'http://swapi.co/api/planets/36/'
    },
    {
      'name': 'Ryloth',
      'rotation_period': '30',
      'orbital_period': '305',
      'diameter': '10600',
      'climate': 'temperate, arid, subartic',
      'gravity': '1',
      'terrain': 'mountains, valleys, deserts, tundra',
      'surface_water': '5',
      'population': '1500000000',
      'residents': [
        'http://swapi.co/api/people/45/',
        'http://swapi.co/api/people/46/'
      ],
      'films': [],
      'created': '2014-12-20T09:46:25.740000Z',
      'edited': '2014-12-20T20:58:18.481000Z',
      'url': 'http://swapi.co/api/planets/37/'
    },
    {
      'name': 'Aleen Minor',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'unknown',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/47/'
      ],
      'films': [],
      'created': '2014-12-20T09:52:23.452000Z',
      'edited': '2014-12-20T20:58:18.483000Z',
      'url': 'http://swapi.co/api/planets/38/'
    },
    {
      'name': 'Vulpter',
      'rotation_period': '22',
      'orbital_period': '391',
      'diameter': '14900',
      'climate': 'temperate, artic',
      'gravity': '1',
      'terrain': 'urban, barren',
      'surface_water': 'unknown',
      'population': '421000000',
      'residents': [
        'http://swapi.co/api/people/48/'
      ],
      'films': [],
      'created': '2014-12-20T09:56:58.874000Z',
      'edited': '2014-12-20T20:58:18.485000Z',
      'url': 'http://swapi.co/api/planets/39/'
    },
    {
      'name': 'Troiken',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'desert, tundra, rainforests, mountains',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/49/'
      ],
      'films': [],
      'created': '2014-12-20T10:01:37.395000Z',
      'edited': '2014-12-20T20:58:18.487000Z',
      'url': 'http://swapi.co/api/planets/40/'
    },
    {
      'name': 'Tund',
      'rotation_period': '48',
      'orbital_period': '1770',
      'diameter': '12190',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'barren, ash',
      'surface_water': 'unknown',
      'population': '0',
      'residents': [
        'http://swapi.co/api/people/50/'
      ],
      'films': [],
      'created': '2014-12-20T10:07:29.578000Z',
      'edited': '2014-12-20T20:58:18.489000Z',
      'url': 'http://swapi.co/api/planets/41/'
    },
    {
      'name': 'Serenno',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'rainforests, rivers, mountains',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/67/'
      ],
      'films': [],
      'created': '2014-12-20T16:52:13.357000Z',
      'edited': '2014-12-20T20:58:18.510000Z',
      'url': 'http://swapi.co/api/planets/52/'
    },
    {
      'name': 'Concord Dawn',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'jungles, forests, deserts',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/69/'
      ],
      'films': [],
      'created': '2014-12-20T16:54:39.909000Z',
      'edited': '2014-12-20T20:58:18.512000Z',
      'url': 'http://swapi.co/api/planets/53/'
    },
    {
      'name': 'Zolan',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'unknown',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/70/'
      ],
      'films': [],
      'created': '2014-12-20T16:56:37.250000Z',
      'edited': '2014-12-20T20:58:18.514000Z',
      'url': 'http://swapi.co/api/planets/54/'
    },
    {
      'name': 'Ojom',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'frigid',
      'gravity': 'unknown',
      'terrain': 'oceans, glaciers',
      'surface_water': '100',
      'population': '500000000',
      'residents': [
        'http://swapi.co/api/people/71/'
      ],
      'films': [],
      'created': '2014-12-20T17:27:41.286000Z',
      'edited': '2014-12-20T20:58:18.516000Z',
      'url': 'http://swapi.co/api/planets/55/'
    },
    {
      'name': 'Skako',
      'rotation_period': '27',
      'orbital_period': '384',
      'diameter': 'unknown',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'urban, vines',
      'surface_water': 'unknown',
      'population': '500000000000',
      'residents': [
        'http://swapi.co/api/people/76/'
      ],
      'films': [],
      'created': '2014-12-20T17:50:47.864000Z',
      'edited': '2014-12-20T20:58:18.517000Z',
      'url': 'http://swapi.co/api/planets/56/'
    },
    {
      'name': 'Muunilinst',
      'rotation_period': '28',
      'orbital_period': '412',
      'diameter': '13800',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'plains, forests, hills, mountains',
      'surface_water': '25',
      'population': '5000000000',
      'residents': [
        'http://swapi.co/api/people/77/'
      ],
      'films': [],
      'created': '2014-12-20T17:57:47.420000Z',
      'edited': '2014-12-20T20:58:18.519000Z',
      'url': 'http://swapi.co/api/planets/57/'
    },
    {
      'name': 'Shili',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'cities, savannahs, seas, plains',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/78/'
      ],
      'films': [],
      'created': '2014-12-20T18:43:14.049000Z',
      'edited': '2014-12-20T20:58:18.521000Z',
      'url': 'http://swapi.co/api/planets/58/'
    },
    {
      'name': 'Kalee',
      'rotation_period': '23',
      'orbital_period': '378',
      'diameter': '13850',
      'climate': 'arid, temperate, tropical',
      'gravity': '1',
      'terrain': 'rainforests, cliffs, canyons, seas',
      'surface_water': 'unknown',
      'population': '4000000000',
      'residents': [
        'http://swapi.co/api/people/79/'
      ],
      'films': [],
      'created': '2014-12-20T19:43:51.278000Z',
      'edited': '2014-12-20T20:58:18.523000Z',
      'url': 'http://swapi.co/api/planets/59/'
    },
    {
      'name': 'Umbara',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'unknown',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/82/'
      ],
      'films': [],
      'created': '2014-12-20T20:18:36.256000Z',
      'edited': '2014-12-20T20:58:18.525000Z',
      'url': 'http://swapi.co/api/planets/60/'
    },
    {
      'name': 'Tatooine',
      'rotation_period': '23',
      'orbital_period': '304',
      'diameter': '10465',
      'climate': 'arid',
      'gravity': '1 standard',
      'terrain': 'desert',
      'surface_water': '1',
      'population': '200000',
      'residents': [
        'http://swapi.co/api/people/1/',
        'http://swapi.co/api/people/2/',
        'http://swapi.co/api/people/4/',
        'http://swapi.co/api/people/6/',
        'http://swapi.co/api/people/7/',
        'http://swapi.co/api/people/8/',
        'http://swapi.co/api/people/9/',
        'http://swapi.co/api/people/11/',
        'http://swapi.co/api/people/43/',
        'http://swapi.co/api/people/62/'
      ],
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/'
      ],
      'created': '2014-12-09T13:50:49.641000Z',
      'edited': '2014-12-21T20:48:04.175778Z',
      'url': 'http://swapi.co/api/planets/1/'
    },
    {
      'name': 'Haruun Kal',
      'rotation_period': '25',
      'orbital_period': '383',
      'diameter': '10120',
      'climate': 'temperate',
      'gravity': '0.98',
      'terrain': 'toxic cloudsea, plateaus, volcanoes',
      'surface_water': 'unknown',
      'population': '705300',
      'residents': [
        'http://swapi.co/api/people/51/'
      ],
      'films': [],
      'created': '2014-12-20T10:12:28.980000Z',
      'edited': '2014-12-20T20:58:18.491000Z',
      'url': 'http://swapi.co/api/planets/42/'
    },
    {
      'name': 'Cerea',
      'rotation_period': '27',
      'orbital_period': '386',
      'diameter': 'unknown',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'verdant',
      'surface_water': '20',
      'population': '450000000',
      'residents': [
        'http://swapi.co/api/people/52/'
      ],
      'films': [],
      'created': '2014-12-20T10:14:48.178000Z',
      'edited': '2014-12-20T20:58:18.493000Z',
      'url': 'http://swapi.co/api/planets/43/'
    },
    {
      'name': 'Glee Anselm',
      'rotation_period': '33',
      'orbital_period': '206',
      'diameter': '15600',
      'climate': 'tropical, temperate',
      'gravity': '1',
      'terrain': 'lakes, islands, swamps, seas',
      'surface_water': '80',
      'population': '500000000',
      'residents': [
        'http://swapi.co/api/people/53/'
      ],
      'films': [],
      'created': '2014-12-20T10:18:26.110000Z',
      'edited': '2014-12-20T20:58:18.495000Z',
      'url': 'http://swapi.co/api/planets/44/'
    },
    {
      'name': 'Iridonia',
      'rotation_period': '29',
      'orbital_period': '413',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'rocky canyons, acid pools',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/54/'
      ],
      'films': [],
      'created': '2014-12-20T10:26:05.788000Z',
      'edited': '2014-12-20T20:58:18.497000Z',
      'url': 'http://swapi.co/api/planets/45/'
    },
    {
      'name': 'Tholoth',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'unknown',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [],
      'films': [],
      'created': '2014-12-20T10:28:31.117000Z',
      'edited': '2014-12-20T20:58:18.498000Z',
      'url': 'http://swapi.co/api/planets/46/'
    },
    {
      'name': 'Iktotch',
      'rotation_period': '22',
      'orbital_period': '481',
      'diameter': 'unknown',
      'climate': 'arid, rocky, windy',
      'gravity': '1',
      'terrain': 'rocky',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/56/'
      ],
      'films': [],
      'created': '2014-12-20T10:31:32.413000Z',
      'edited': '2014-12-20T20:58:18.500000Z',
      'url': 'http://swapi.co/api/planets/47/'
    },
    {
      'name': 'Quermia',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'unknown',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/57/'
      ],
      'films': [],
      'created': '2014-12-20T10:34:08.249000Z',
      'edited': '2014-12-20T20:58:18.502000Z',
      'url': 'http://swapi.co/api/planets/48/'
    },
    {
      'name': 'Dorin',
      'rotation_period': '22',
      'orbital_period': '409',
      'diameter': '13400',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'unknown',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/58/'
      ],
      'films': [],
      'created': '2014-12-20T10:48:36.141000Z',
      'edited': '2014-12-20T20:58:18.504000Z',
      'url': 'http://swapi.co/api/planets/49/'
    },
    {
      'name': 'Champala',
      'rotation_period': '27',
      'orbital_period': '318',
      'diameter': 'unknown',
      'climate': 'temperate',
      'gravity': '1',
      'terrain': 'oceans, rainforests, plateaus',
      'surface_water': 'unknown',
      'population': '3500000000',
      'residents': [
        'http://swapi.co/api/people/59/'
      ],
      'films': [],
      'created': '2014-12-20T10:52:51.524000Z',
      'edited': '2014-12-20T20:58:18.506000Z',
      'url': 'http://swapi.co/api/planets/50/'
    },
    {
      'name': 'Mirial',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'deserts',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/64/',
        'http://swapi.co/api/people/65/'
      ],
      'films': [],
      'created': '2014-12-20T16:44:46.318000Z',
      'edited': '2014-12-20T20:58:18.508000Z',
      'url': 'http://swapi.co/api/planets/51/'
    },
    {
      'name': 'Utapau',
      'rotation_period': '27',
      'orbital_period': '351',
      'diameter': '12900',
      'climate': 'temperate, arid, windy',
      'gravity': '1 standard',
      'terrain': 'scrublands, savanna, canyons, sinkholes',
      'surface_water': '0.9',
      'population': '95000000',
      'residents': [
        'http://swapi.co/api/people/83/'
      ],
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'created': '2014-12-10T12:49:01.491000Z',
      'edited': '2014-12-20T20:58:18.439000Z',
      'url': 'http://swapi.co/api/planets/12/'
    },
    {
      'name': 'Mustafar',
      'rotation_period': '36',
      'orbital_period': '412',
      'diameter': '4200',
      'climate': 'hot',
      'gravity': '1 standard',
      'terrain': 'volcanoes, lava rivers, mountains, caves',
      'surface_water': '0',
      'population': '20000',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'created': '2014-12-10T12:50:16.526000Z',
      'edited': '2014-12-20T20:58:18.440000Z',
      'url': 'http://swapi.co/api/planets/13/'
    },
    {
      'name': 'Kashyyyk',
      'rotation_period': '26',
      'orbital_period': '381',
      'diameter': '12765',
      'climate': 'tropical',
      'gravity': '1 standard',
      'terrain': 'jungle, forests, lakes, rivers',
      'surface_water': '60',
      'population': '45000000',
      'residents': [
        'http://swapi.co/api/people/13/',
        'http://swapi.co/api/people/80/'
      ],
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'created': '2014-12-10T13:32:00.124000Z',
      'edited': '2014-12-20T20:58:18.442000Z',
      'url': 'http://swapi.co/api/planets/14/'
    },
    {
      'name': 'Polis Massa',
      'rotation_period': '24',
      'orbital_period': '590',
      'diameter': '0',
      'climate': 'artificial temperate ',
      'gravity': '0.56 standard',
      'terrain': 'airless asteroid',
      'surface_water': '0',
      'population': '1000000',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'created': '2014-12-10T13:33:46.405000Z',
      'edited': '2014-12-20T20:58:18.444000Z',
      'url': 'http://swapi.co/api/planets/15/'
    },
    {
      'name': 'Mygeeto',
      'rotation_period': '12',
      'orbital_period': '167',
      'diameter': '10088',
      'climate': 'frigid',
      'gravity': '1 standard',
      'terrain': 'glaciers, mountains, ice canyons',
      'surface_water': 'unknown',
      'population': '19000000',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'created': '2014-12-10T13:43:39.139000Z',
      'edited': '2014-12-20T20:58:18.446000Z',
      'url': 'http://swapi.co/api/planets/16/'
    },
    {
      'name': 'Felucia',
      'rotation_period': '34',
      'orbital_period': '231',
      'diameter': '9100',
      'climate': 'hot, humid',
      'gravity': '0.75 standard',
      'terrain': 'fungus forests',
      'surface_water': 'unknown',
      'population': '8500000',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'created': '2014-12-10T13:44:50.397000Z',
      'edited': '2014-12-20T20:58:18.447000Z',
      'url': 'http://swapi.co/api/planets/17/'
    },
    {
      'name': 'Cato Neimoidia',
      'rotation_period': '25',
      'orbital_period': '278',
      'diameter': '0',
      'climate': 'temperate, moist',
      'gravity': '1 standard',
      'terrain': 'mountains, fields, forests, rock arches',
      'surface_water': 'unknown',
      'population': '10000000',
      'residents': [
        'http://swapi.co/api/people/33/'
      ],
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'created': '2014-12-10T13:46:28.704000Z',
      'edited': '2014-12-20T20:58:18.449000Z',
      'url': 'http://swapi.co/api/planets/18/'
    },
    {
      'name': 'Saleucami',
      'rotation_period': '26',
      'orbital_period': '392',
      'diameter': '14920',
      'climate': 'hot',
      'gravity': 'unknown',
      'terrain': 'caves, desert, mountains, volcanoes',
      'surface_water': 'unknown',
      'population': '1400000000',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'created': '2014-12-10T13:47:46.874000Z',
      'edited': '2014-12-20T20:58:18.450000Z',
      'url': 'http://swapi.co/api/planets/19/'
    },
    {
      'name': 'Stewjon',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': '0',
      'climate': 'temperate',
      'gravity': '1 standard',
      'terrain': 'grass',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [
        'http://swapi.co/api/people/10/'
      ],
      'films': [],
      'created': '2014-12-10T16:16:26.566000Z',
      'edited': '2014-12-20T20:58:18.452000Z',
      'url': 'http://swapi.co/api/planets/20/'
    },
    {
      'name': 'Eriadu',
      'rotation_period': '24',
      'orbital_period': '360',
      'diameter': '13490',
      'climate': 'polluted',
      'gravity': '1 standard',
      'terrain': 'cityscape',
      'surface_water': 'unknown',
      'population': '22000000000',
      'residents': [
        'http://swapi.co/api/people/12/'
      ],
      'films': [],
      'created': '2014-12-10T16:26:54.384000Z',
      'edited': '2014-12-20T20:58:18.454000Z',
      'url': 'http://swapi.co/api/planets/21/'
    },
    {
      'name': 'Jakku',
      'rotation_period': 'unknown',
      'orbital_period': 'unknown',
      'diameter': 'unknown',
      'climate': 'unknown',
      'gravity': 'unknown',
      'terrain': 'deserts',
      'surface_water': 'unknown',
      'population': 'unknown',
      'residents': [],
      'films': [
        'http://swapi.co/api/films/7/'
      ],
      'created': '2015-04-17T06:55:57.556495Z',
      'edited': '2015-04-17T06:55:57.556551Z',
      'url': 'http://swapi.co/api/planets/61/'
    }
  ];

  people: any[] = [
    {
      'name': 'Ackbar',
      'height': '180',
      'mass': '83',
      'hair_color': 'none',
      'skin_color': 'brown mottle',
      'eye_color': 'orange',
      'birth_year': '41BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/31/',
      'films': [
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/8/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-18T11:07:50.584000Z',
      'edited': '2014-12-20T21:17:50.362000Z',
      'url': 'http://swapi.co/api/people/27/'
    },
    {
      'name': 'Adi Gallia',
      'height': '184',
      'mass': '50',
      'hair_color': 'none',
      'skin_color': 'dark',
      'eye_color': 'blue',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/9/',
      'films': [
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/23/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:29:11.661000Z',
      'edited': '2014-12-20T21:17:50.432000Z',
      'url': 'http://swapi.co/api/people/55/'
    },
    {
      'name': 'Anakin Skywalker',
      'height': '188',
      'mass': '84',
      'hair_color': 'blond',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '41.9BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/44/',
        'http://swapi.co/api/vehicles/46/'
      ],
      'starships': [
        'http://swapi.co/api/starships/59/',
        'http://swapi.co/api/starships/65/',
        'http://swapi.co/api/starships/39/'
      ],
      'created': '2014-12-10T16:20:44.310000Z',
      'edited': '2014-12-20T21:17:50.327000Z',
      'url': 'http://swapi.co/api/people/11/'
    },
    {
      'name': 'Arvel Crynyd',
      'height': 'unknown',
      'mass': 'unknown',
      'hair_color': 'brown',
      'skin_color': 'fair',
      'eye_color': 'brown',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/28/'
      ],
      'created': '2014-12-18T11:16:33.020000Z',
      'edited': '2014-12-20T21:17:50.367000Z',
      'url': 'http://swapi.co/api/people/29/'
    },
    {
      'name': 'Ayla Secura',
      'height': '178',
      'mass': '55',
      'hair_color': 'none',
      'skin_color': 'blue',
      'eye_color': 'hazel',
      'birth_year': '48BBY',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/37/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/15/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T09:48:01.172000Z',
      'edited': '2014-12-20T21:17:50.409000Z',
      'url': 'http://swapi.co/api/people/46/'
    },
    {
      'name': 'Bail Prestor Organa',
      'height': '191',
      'mass': 'unknown',
      'hair_color': 'black',
      'skin_color': 'tan',
      'eye_color': 'brown',
      'birth_year': '67BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/2/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T16:53:08.575000Z',
      'edited': '2014-12-20T21:17:50.463000Z',
      'url': 'http://swapi.co/api/people/68/'
    },
    {
      'name': 'Barriss Offee',
      'height': '166',
      'mass': '50',
      'hair_color': 'black',
      'skin_color': 'yellow',
      'eye_color': 'blue',
      'birth_year': '40BBY',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/51/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/29/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T16:46:40.440000Z',
      'edited': '2014-12-20T21:17:50.457000Z',
      'url': 'http://swapi.co/api/people/65/'
    },
    {
      'name': 'BB8',
      'height': 'unknown',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'none',
      'eye_color': 'black',
      'birth_year': 'unknown',
      'gender': 'none',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/2/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2015-04-17T06:57:38.061346Z',
      'edited': '2015-04-17T06:57:38.061453Z',
      'url': 'http://swapi.co/api/people/87/'
    },
    {
      'name': 'Ben Quadinaros',
      'height': '163',
      'mass': '65',
      'hair_color': 'none',
      'skin_color': 'grey, green, yellow',
      'eye_color': 'orange',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/41/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/19/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:08:33.777000Z',
      'edited': '2014-12-20T21:17:50.417000Z',
      'url': 'http://swapi.co/api/people/50/'
    },
    {
      'name': 'Beru Whitesun lars',
      'height': '165',
      'mass': '75',
      'hair_color': 'brown',
      'skin_color': 'light',
      'eye_color': 'blue',
      'birth_year': '47BBY',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-10T15:53:41.121000Z',
      'edited': '2014-12-20T21:17:50.319000Z',
      'url': 'http://swapi.co/api/people/7/'
    },
    {
      'name': 'Bib Fortuna',
      'height': '180',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'pale',
      'eye_color': 'pink',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/37/',
      'films': [
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/15/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T09:47:02.512000Z',
      'edited': '2014-12-20T21:17:50.407000Z',
      'url': 'http://swapi.co/api/people/45/'
    },
    {
      'name': 'Biggs Darklighter',
      'height': '183',
      'mass': '84',
      'hair_color': 'black',
      'skin_color': 'light',
      'eye_color': 'brown',
      'birth_year': '24BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/12/'
      ],
      'created': '2014-12-10T15:59:50.509000Z',
      'edited': '2014-12-20T21:17:50.323000Z',
      'url': 'http://swapi.co/api/people/9/'
    },
    {
      'name': 'Boba Fett',
      'height': '183',
      'mass': '78.2',
      'hair_color': 'black',
      'skin_color': 'fair',
      'eye_color': 'brown',
      'birth_year': '31.5BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/10/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/21/'
      ],
      'created': '2014-12-15T12:49:32.457000Z',
      'edited': '2014-12-20T21:17:50.349000Z',
      'url': 'http://swapi.co/api/people/22/'
    },
    {
      'name': 'Bossk',
      'height': '190',
      'mass': '113',
      'hair_color': 'none',
      'skin_color': 'green',
      'eye_color': 'red',
      'birth_year': '53BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/29/',
      'films': [
        'http://swapi.co/api/films/2/'
      ],
      'species': [
        'http://swapi.co/api/species/7/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-15T12:53:49.297000Z',
      'edited': '2014-12-20T21:17:50.355000Z',
      'url': 'http://swapi.co/api/people/24/'
    },
    {
      'name': 'C-3PO',
      'height': '167',
      'mass': '75',
      'hair_color': 'n/a',
      'skin_color': 'gold',
      'eye_color': 'yellow',
      'birth_year': '112BBY',
      'gender': 'n/a',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/2/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-10T15:10:51.357000Z',
      'edited': '2014-12-20T21:17:50.309000Z',
      'url': 'http://swapi.co/api/people/2/'
    },
    {
      'name': 'Captain Phasma',
      'height': 'unknown',
      'mass': 'unknown',
      'hair_color': 'unknown',
      'skin_color': 'unknown',
      'eye_color': 'unknown',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/7/'
      ],
      'species': [],
      'vehicles': [],
      'starships': [],
      'created': '2015-10-13T10:35:39.229823Z',
      'edited': '2015-10-13T10:35:39.229894Z',
      'url': 'http://swapi.co/api/people/88/'
    },
    {
      'name': 'Chewbacca',
      'height': '228',
      'mass': '112',
      'hair_color': 'brown',
      'skin_color': 'unknown',
      'eye_color': 'blue',
      'birth_year': '200BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/14/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/',
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/3/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/19/'
      ],
      'starships': [
        'http://swapi.co/api/starships/10/',
        'http://swapi.co/api/starships/22/'
      ],
      'created': '2014-12-10T16:42:45.066000Z',
      'edited': '2014-12-20T21:17:50.332000Z',
      'url': 'http://swapi.co/api/people/13/'
    },
    {
      'name': 'Cliegg Lars',
      'height': '183',
      'mass': 'unknown',
      'hair_color': 'brown',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '82BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T15:59:03.958000Z',
      'edited': '2014-12-20T21:17:50.451000Z',
      'url': 'http://swapi.co/api/people/62/'
    },
    {
      'name': 'Cordé',
      'height': '157',
      'mass': 'unknown',
      'hair_color': 'brown',
      'skin_color': 'light',
      'eye_color': 'brown',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T11:11:39.630000Z',
      'edited': '2014-12-20T21:17:50.449000Z',
      'url': 'http://swapi.co/api/people/61/'
    },
    {
      'name': 'Darth Maul',
      'height': '175',
      'mass': '80',
      'hair_color': 'none',
      'skin_color': 'red',
      'eye_color': 'yellow',
      'birth_year': '54BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/36/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/22/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/42/'
      ],
      'starships': [
        'http://swapi.co/api/starships/41/'
      ],
      'created': '2014-12-19T18:00:41.929000Z',
      'edited': '2014-12-20T21:17:50.403000Z',
      'url': 'http://swapi.co/api/people/44/'
    },
    {
      'name': 'Darth Vader',
      'height': '202',
      'mass': '136',
      'hair_color': 'none',
      'skin_color': 'white',
      'eye_color': 'yellow',
      'birth_year': '41.9BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/13/'
      ],
      'created': '2014-12-10T15:18:20.704000Z',
      'edited': '2014-12-20T21:17:50.313000Z',
      'url': 'http://swapi.co/api/people/4/'
    },
    {
      'name': 'Dexter Jettster',
      'height': '198',
      'mass': '102',
      'hair_color': 'none',
      'skin_color': 'brown',
      'eye_color': 'yellow',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/55/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/31/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T17:28:27.248000Z',
      'edited': '2014-12-20T21:17:50.470000Z',
      'url': 'http://swapi.co/api/people/71/'
    },
    {
      'name': 'Dooku',
      'height': '193',
      'mass': '80',
      'hair_color': 'white',
      'skin_color': 'fair',
      'eye_color': 'brown',
      'birth_year': '102BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/52/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/55/'
      ],
      'starships': [],
      'created': '2014-12-20T16:52:14.726000Z',
      'edited': '2014-12-20T21:17:50.462000Z',
      'url': 'http://swapi.co/api/people/67/'
    },
    {
      'name': 'Dormé',
      'height': '165',
      'mass': 'unknown',
      'hair_color': 'brown',
      'skin_color': 'light',
      'eye_color': 'brown',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T16:49:14.640000Z',
      'edited': '2014-12-20T21:17:50.460000Z',
      'url': 'http://swapi.co/api/people/66/'
    },
    {
      'name': 'Dud Bolt',
      'height': '94',
      'mass': '45',
      'hair_color': 'none',
      'skin_color': 'blue, grey',
      'eye_color': 'yellow',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/39/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/17/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T09:57:31.858000Z',
      'edited': '2014-12-20T21:17:50.414000Z',
      'url': 'http://swapi.co/api/people/48/'
    },
    {
      'name': 'Eeth Koth',
      'height': '171',
      'mass': 'unknown',
      'hair_color': 'black',
      'skin_color': 'brown',
      'eye_color': 'brown',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/45/',
      'films': [
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/22/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:26:47.902000Z',
      'edited': '2014-12-20T21:17:50.427000Z',
      'url': 'http://swapi.co/api/people/54/'
    },
    {
      'name': 'Finis Valorum',
      'height': '170',
      'mass': 'unknown',
      'hair_color': 'blond',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '91BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/9/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:21:45.915000Z',
      'edited': '2014-12-20T21:17:50.379000Z',
      'url': 'http://swapi.co/api/people/34/'
    },
    {
      'name': 'Finn',
      'height': 'unknown',
      'mass': 'unknown',
      'hair_color': 'black',
      'skin_color': 'dark',
      'eye_color': 'dark',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2015-04-17T06:52:40.793621Z',
      'edited': '2015-04-17T06:52:40.793674Z',
      'url': 'http://swapi.co/api/people/84/'
    },
    {
      'name': 'Gasgano',
      'height': '122',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'white, blue',
      'eye_color': 'black',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/40/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/18/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:02:12.223000Z',
      'edited': '2014-12-20T21:17:50.416000Z',
      'url': 'http://swapi.co/api/people/49/'
    },
    {
      'name': 'Greedo',
      'height': '173',
      'mass': '74',
      'hair_color': 'n/a',
      'skin_color': 'green',
      'eye_color': 'black',
      'birth_year': '44BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/23/',
      'films': [
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/4/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-10T17:03:30.334000Z',
      'edited': '2014-12-20T21:17:50.336000Z',
      'url': 'http://swapi.co/api/people/15/'
    },
    {
      'name': 'Gregar Typho',
      'height': '185',
      'mass': '85',
      'hair_color': 'black',
      'skin_color': 'dark',
      'eye_color': 'brown',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/39/'
      ],
      'created': '2014-12-20T11:10:10.381000Z',
      'edited': '2014-12-20T21:17:50.445000Z',
      'url': 'http://swapi.co/api/people/60/'
    },
    {
      'name': 'Grievous',
      'height': '216',
      'mass': '159',
      'hair_color': 'none',
      'skin_color': 'brown, white',
      'eye_color': 'green, yellow',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/59/',
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/36/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/60/'
      ],
      'starships': [
        'http://swapi.co/api/starships/74/'
      ],
      'created': '2014-12-20T19:43:53.348000Z',
      'edited': '2014-12-20T21:17:50.488000Z',
      'url': 'http://swapi.co/api/people/79/'
    },
    {
      'name': 'Han Solo',
      'height': '180',
      'mass': '80',
      'hair_color': 'brown',
      'skin_color': 'fair',
      'eye_color': 'brown',
      'birth_year': '29BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/22/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/',
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/10/',
        'http://swapi.co/api/starships/22/'
      ],
      'created': '2014-12-10T16:49:14.582000Z',
      'edited': '2014-12-20T21:17:50.334000Z',
      'url': 'http://swapi.co/api/people/14/'
    },
    {
      'name': 'IG-88',
      'height': '200',
      'mass': '140',
      'hair_color': 'none',
      'skin_color': 'metal',
      'eye_color': 'red',
      'birth_year': '15BBY',
      'gender': 'none',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/2/'
      ],
      'species': [
        'http://swapi.co/api/species/2/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-15T12:51:10.076000Z',
      'edited': '2014-12-20T21:17:50.351000Z',
      'url': 'http://swapi.co/api/people/23/'
    },
    {
      'name': 'Jabba Desilijic Tiure',
      'height': '175',
      'mass': '1,358',
      'hair_color': 'n/a',
      'skin_color': 'green-tan, brown',
      'eye_color': 'orange',
      'birth_year': '600BBY',
      'gender': 'hermaphrodite',
      'homeworld': 'http://swapi.co/api/planets/24/',
      'films': [
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/5/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-10T17:11:31.638000Z',
      'edited': '2014-12-20T21:17:50.338000Z',
      'url': 'http://swapi.co/api/people/16/'
    },
    {
      'name': 'Jango Fett',
      'height': '183',
      'mass': '79',
      'hair_color': 'black',
      'skin_color': 'tan',
      'eye_color': 'brown',
      'birth_year': '66BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/53/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T16:54:41.620000Z',
      'edited': '2014-12-20T21:17:50.465000Z',
      'url': 'http://swapi.co/api/people/69/'
    },
    {
      'name': 'Jar Jar Binks',
      'height': '196',
      'mass': '66',
      'hair_color': 'none',
      'skin_color': 'orange',
      'eye_color': 'orange',
      'birth_year': '52BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/12/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:29:32.489000Z',
      'edited': '2014-12-20T21:17:50.383000Z',
      'url': 'http://swapi.co/api/people/36/'
    },
    {
      'name': 'Jek Tono Porkins',
      'height': '180',
      'mass': '110',
      'hair_color': 'brown',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/26/',
      'films': [
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/12/'
      ],
      'created': '2014-12-12T11:16:56.569000Z',
      'edited': '2014-12-20T21:17:50.343000Z',
      'url': 'http://swapi.co/api/people/19/'
    },
    {
      'name': 'Jocasta Nu',
      'height': '167',
      'mass': 'unknown',
      'hair_color': 'white',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/9/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T17:32:51.996000Z',
      'edited': '2014-12-20T21:17:50.476000Z',
      'url': 'http://swapi.co/api/people/74/'
    },
    {
      'name': 'Ki-Adi-Mundi',
      'height': '198',
      'mass': '82',
      'hair_color': 'white',
      'skin_color': 'pale',
      'eye_color': 'yellow',
      'birth_year': '92BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/43/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/20/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:15:32.293000Z',
      'edited': '2014-12-20T21:17:50.422000Z',
      'url': 'http://swapi.co/api/people/52/'
    },
    {
      'name': 'Kit Fisto',
      'height': '196',
      'mass': '87',
      'hair_color': 'none',
      'skin_color': 'green',
      'eye_color': 'black',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/44/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/21/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:18:57.202000Z',
      'edited': '2014-12-20T21:17:50.424000Z',
      'url': 'http://swapi.co/api/people/53/'
    },
    {
      'name': 'Lama Su',
      'height': '229',
      'mass': '88',
      'hair_color': 'none',
      'skin_color': 'grey',
      'eye_color': 'black',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/10/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/32/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T17:30:50.416000Z',
      'edited': '2014-12-20T21:17:50.473000Z',
      'url': 'http://swapi.co/api/people/72/'
    },
    {
      'name': 'Lando Calrissian',
      'height': '177',
      'mass': '79',
      'hair_color': 'black',
      'skin_color': 'dark',
      'eye_color': 'brown',
      'birth_year': '31BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/30/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/10/'
      ],
      'created': '2014-12-15T12:56:32.683000Z',
      'edited': '2014-12-20T21:17:50.357000Z',
      'url': 'http://swapi.co/api/people/25/'
    },
    {
      'name': 'Leia Organa',
      'height': '150',
      'mass': '49',
      'hair_color': 'brown',
      'skin_color': 'light',
      'eye_color': 'brown',
      'birth_year': '19BBY',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/2/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/',
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/30/'
      ],
      'starships': [],
      'created': '2014-12-10T15:20:09.791000Z',
      'edited': '2014-12-20T21:17:50.315000Z',
      'url': 'http://swapi.co/api/people/5/'
    },
    {
      'name': 'Lobot',
      'height': '175',
      'mass': '79',
      'hair_color': 'none',
      'skin_color': 'light',
      'eye_color': 'blue',
      'birth_year': '37BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/6/',
      'films': [
        'http://swapi.co/api/films/2/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-15T13:01:57.178000Z',
      'edited': '2014-12-20T21:17:50.359000Z',
      'url': 'http://swapi.co/api/people/26/'
    },
    {
      'name': 'Luke Skywalker',
      'height': '172',
      'mass': '77',
      'hair_color': 'blond',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '19BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/',
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/14/',
        'http://swapi.co/api/vehicles/30/'
      ],
      'starships': [
        'http://swapi.co/api/starships/12/',
        'http://swapi.co/api/starships/22/'
      ],
      'created': '2014-12-09T13:50:51.644000Z',
      'edited': '2014-12-20T21:17:56.891000Z',
      'url': 'http://swapi.co/api/people/1/'
    },
    {
      'name': 'Luminara Unduli',
      'height': '170',
      'mass': '56.2',
      'hair_color': 'black',
      'skin_color': 'yellow',
      'eye_color': 'blue',
      'birth_year': '58BBY',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/51/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/29/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T16:45:53.668000Z',
      'edited': '2014-12-20T21:17:50.455000Z',
      'url': 'http://swapi.co/api/people/64/'
    },
    {
      'name': 'Mace Windu',
      'height': '188',
      'mass': '84',
      'hair_color': 'none',
      'skin_color': 'dark',
      'eye_color': 'brown',
      'birth_year': '72BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/42/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:12:30.846000Z',
      'edited': '2014-12-20T21:17:50.420000Z',
      'url': 'http://swapi.co/api/people/51/'
    },
    {
      'name': 'Mas Amedda',
      'height': '196',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'blue',
      'eye_color': 'blue',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/50/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/27/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:53:26.457000Z',
      'edited': '2014-12-20T21:17:50.442000Z',
      'url': 'http://swapi.co/api/people/59/'
    },
    {
      'name': 'Mon Mothma',
      'height': '150',
      'mass': 'unknown',
      'hair_color': 'auburn',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '48BBY',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/32/',
      'films': [
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-18T11:12:38.895000Z',
      'edited': '2014-12-20T21:17:50.364000Z',
      'url': 'http://swapi.co/api/people/28/'
    },
    {
      'name': 'Nien Nunb',
      'height': '160',
      'mass': '68',
      'hair_color': 'none',
      'skin_color': 'grey',
      'eye_color': 'black',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/33/',
      'films': [
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/10/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/10/'
      ],
      'created': '2014-12-18T11:26:18.541000Z',
      'edited': '2014-12-20T21:17:50.371000Z',
      'url': 'http://swapi.co/api/people/31/'
    },
    {
      'name': 'Nute Gunray',
      'height': '191',
      'mass': '90',
      'hair_color': 'none',
      'skin_color': 'mottled green',
      'eye_color': 'red',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/18/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/11/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:05:57.357000Z',
      'edited': '2014-12-20T21:17:50.377000Z',
      'url': 'http://swapi.co/api/people/33/'
    },
    {
      'name': 'Obi-Wan Kenobi',
      'height': '182',
      'mass': '77',
      'hair_color': 'auburn, white',
      'skin_color': 'fair',
      'eye_color': 'blue-gray',
      'birth_year': '57BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/20/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/38/'
      ],
      'starships': [
        'http://swapi.co/api/starships/48/',
        'http://swapi.co/api/starships/59/',
        'http://swapi.co/api/starships/64/',
        'http://swapi.co/api/starships/65/',
        'http://swapi.co/api/starships/74/'
      ],
      'created': '2014-12-10T16:16:29.192000Z',
      'edited': '2014-12-20T21:17:50.325000Z',
      'url': 'http://swapi.co/api/people/10/'
    },
    {
      'name': 'Owen Lars',
      'height': '178',
      'mass': '120',
      'hair_color': 'brown, grey',
      'skin_color': 'light',
      'eye_color': 'blue',
      'birth_year': '52BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-10T15:52:14.024000Z',
      'edited': '2014-12-20T21:17:50.317000Z',
      'url': 'http://swapi.co/api/people/6/'
    },
    {
      'name': 'Padmé Amidala',
      'height': '165',
      'mass': '45',
      'hair_color': 'brown',
      'skin_color': 'light',
      'eye_color': 'brown',
      'birth_year': '46BBY',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/49/',
        'http://swapi.co/api/starships/64/',
        'http://swapi.co/api/starships/39/'
      ],
      'created': '2014-12-19T17:28:26.926000Z',
      'edited': '2016-04-20T17:06:31.502555Z',
      'url': 'http://swapi.co/api/people/35/'
    },
    {
      'name': 'Palpatine',
      'height': '170',
      'mass': '75',
      'hair_color': 'grey',
      'skin_color': 'pale',
      'eye_color': 'yellow',
      'birth_year': '82BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-15T12:48:05.971000Z',
      'edited': '2014-12-20T21:17:50.347000Z',
      'url': 'http://swapi.co/api/people/21/'
    },
    {
      'name': 'Plo Koon',
      'height': '188',
      'mass': '80',
      'hair_color': 'none',
      'skin_color': 'orange',
      'eye_color': 'black',
      'birth_year': '22BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/49/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/26/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/48/'
      ],
      'created': '2014-12-20T10:49:19.859000Z',
      'edited': '2014-12-20T21:17:50.439000Z',
      'url': 'http://swapi.co/api/people/58/'
    },
    {
      'name': 'Poe Dameron',
      'height': 'unknown',
      'mass': 'unknown',
      'hair_color': 'brown',
      'skin_color': 'light',
      'eye_color': 'brown',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/77/'
      ],
      'created': '2015-04-17T06:55:21.622786Z',
      'edited': '2015-04-17T06:55:21.622835Z',
      'url': 'http://swapi.co/api/people/86/'
    },
    {
      'name': 'Poggle the Lesser',
      'height': '183',
      'mass': '80',
      'hair_color': 'none',
      'skin_color': 'green',
      'eye_color': 'yellow',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/11/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/28/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T16:40:43.977000Z',
      'edited': '2014-12-20T21:17:50.453000Z',
      'url': 'http://swapi.co/api/people/63/'
    },
    {
      'name': 'Quarsh Panaka',
      'height': '183',
      'mass': 'unknown',
      'hair_color': 'black',
      'skin_color': 'dark',
      'eye_color': 'brown',
      'birth_year': '62BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:55:43.348000Z',
      'edited': '2014-12-20T21:17:50.399000Z',
      'url': 'http://swapi.co/api/people/42/'
    },
    {
      'name': 'Qui-Gon Jinn',
      'height': '193',
      'mass': '89',
      'hair_color': 'brown',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '92BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/38/'
      ],
      'starships': [],
      'created': '2014-12-19T16:54:53.618000Z',
      'edited': '2014-12-20T21:17:50.375000Z',
      'url': 'http://swapi.co/api/people/32/'
    },
    {
      'name': 'R2-D2',
      'height': '96',
      'mass': '32',
      'hair_color': 'n/a',
      'skin_color': 'white, blue',
      'eye_color': 'red',
      'birth_year': '33BBY',
      'gender': 'n/a',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/',
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/2/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-10T15:11:50.376000Z',
      'edited': '2014-12-20T21:17:50.311000Z',
      'url': 'http://swapi.co/api/people/3/'
    },
    {
      'name': 'R4-P17',
      'height': '96',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'silver, red',
      'eye_color': 'red, blue',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T17:43:36.409000Z',
      'edited': '2014-12-20T21:17:50.478000Z',
      'url': 'http://swapi.co/api/people/75/'
    },
    {
      'name': 'R5-D4',
      'height': '97',
      'mass': '32',
      'hair_color': 'n/a',
      'skin_color': 'white, red',
      'eye_color': 'red',
      'birth_year': 'unknown',
      'gender': 'n/a',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/2/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-10T15:57:50.959000Z',
      'edited': '2014-12-20T21:17:50.321000Z',
      'url': 'http://swapi.co/api/people/8/'
    },
    {
      'name': 'Ratts Tyerell',
      'height': '79',
      'mass': '15',
      'hair_color': 'none',
      'skin_color': 'grey, blue',
      'eye_color': 'unknown',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/38/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/16/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T09:53:15.086000Z',
      'edited': '2016-06-30T12:52:19.604868Z',
      'url': 'http://swapi.co/api/people/47/'
    },
    {
      'name': 'Raymus Antilles',
      'height': '188',
      'mass': '79',
      'hair_color': 'brown',
      'skin_color': 'light',
      'eye_color': 'brown',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/2/',
      'films': [
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T19:49:35.583000Z',
      'edited': '2014-12-20T21:17:50.493000Z',
      'url': 'http://swapi.co/api/people/81/'
    },
    {
      'name': 'Rey',
      'height': 'unknown',
      'mass': 'unknown',
      'hair_color': 'brown',
      'skin_color': 'light',
      'eye_color': 'hazel',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/7/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2015-04-17T06:54:01.495077Z',
      'edited': '2015-04-17T06:54:01.495128Z',
      'url': 'http://swapi.co/api/people/85/'
    },
    {
      'name': 'Ric Olié',
      'height': '183',
      'mass': 'unknown',
      'hair_color': 'brown',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [],
      'vehicles': [],
      'starships': [
        'http://swapi.co/api/starships/40/'
      ],
      'created': '2014-12-19T17:45:01.522000Z',
      'edited': '2014-12-20T21:17:50.392000Z',
      'url': 'http://swapi.co/api/people/39/'
    },
    {
      'name': 'Roos Tarpals',
      'height': '224',
      'mass': '82',
      'hair_color': 'none',
      'skin_color': 'grey',
      'eye_color': 'orange',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/12/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:32:56.741000Z',
      'edited': '2014-12-20T21:17:50.385000Z',
      'url': 'http://swapi.co/api/people/37/'
    },
    {
      'name': 'Rugor Nass',
      'height': '206',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'green',
      'eye_color': 'orange',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/8/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/12/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:33:38.909000Z',
      'edited': '2014-12-20T21:17:50.388000Z',
      'url': 'http://swapi.co/api/people/38/'
    },
    {
      'name': 'Saesee Tiin',
      'height': '188',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'pale',
      'eye_color': 'orange',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/47/',
      'films': [
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/24/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:32:11.669000Z',
      'edited': '2014-12-20T21:17:50.434000Z',
      'url': 'http://swapi.co/api/people/56/'
    },
    {
      'name': 'San Hill',
      'height': '191',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'grey',
      'eye_color': 'gold',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/57/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/34/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T17:58:17.049000Z',
      'edited': '2014-12-20T21:17:50.484000Z',
      'url': 'http://swapi.co/api/people/77/'
    },
    {
      'name': 'Sebulba',
      'height': '112',
      'mass': '40',
      'hair_color': 'none',
      'skin_color': 'grey, red',
      'eye_color': 'orange',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/35/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/14/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:53:02.586000Z',
      'edited': '2014-12-20T21:17:50.397000Z',
      'url': 'http://swapi.co/api/people/41/'
    },
    {
      'name': 'Shaak Ti',
      'height': '178',
      'mass': '57',
      'hair_color': 'none',
      'skin_color': 'red, blue, white',
      'eye_color': 'black',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/58/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/35/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T18:44:01.103000Z',
      'edited': '2014-12-20T21:17:50.486000Z',
      'url': 'http://swapi.co/api/people/78/'
    },
    {
      'name': 'Shmi Skywalker',
      'height': '163',
      'mass': 'unknown',
      'hair_color': 'black',
      'skin_color': 'fair',
      'eye_color': 'brown',
      'birth_year': '72BBY',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/1/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:57:41.191000Z',
      'edited': '2014-12-20T21:17:50.401000Z',
      'url': 'http://swapi.co/api/people/43/'
    },
    {
      'name': 'Sly Moore',
      'height': '178',
      'mass': '48',
      'hair_color': 'none',
      'skin_color': 'pale',
      'eye_color': 'white',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/60/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/6/'
      ],
      'species': [],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T20:18:37.619000Z',
      'edited': '2014-12-20T21:17:50.496000Z',
      'url': 'http://swapi.co/api/people/82/'
    },
    {
      'name': 'Tarfful',
      'height': '234',
      'mass': '136',
      'hair_color': 'brown',
      'skin_color': 'brown',
      'eye_color': 'blue',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/14/',
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/3/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T19:46:34.209000Z',
      'edited': '2014-12-20T21:17:50.491000Z',
      'url': 'http://swapi.co/api/people/80/'
    },
    {
      'name': 'Taun We',
      'height': '213',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'grey',
      'eye_color': 'black',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/10/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/32/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T17:31:21.195000Z',
      'edited': '2014-12-20T21:17:50.474000Z',
      'url': 'http://swapi.co/api/people/73/'
    },
    {
      'name': 'Tion Medon',
      'height': '206',
      'mass': '80',
      'hair_color': 'none',
      'skin_color': 'grey',
      'eye_color': 'black',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/12/',
      'films': [
        'http://swapi.co/api/films/6/'
      ],
      'species': [
        'http://swapi.co/api/species/37/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T20:35:04.260000Z',
      'edited': '2014-12-20T21:17:50.498000Z',
      'url': 'http://swapi.co/api/people/83/'
    },
    {
      'name': 'Wat Tambor',
      'height': '193',
      'mass': '48',
      'hair_color': 'none',
      'skin_color': 'green, grey',
      'eye_color': 'unknown',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/56/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/33/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T17:53:52.607000Z',
      'edited': '2014-12-20T21:17:50.481000Z',
      'url': 'http://swapi.co/api/people/76/'
    },
    {
      'name': 'Watto',
      'height': '137',
      'mass': 'unknown',
      'hair_color': 'black',
      'skin_color': 'blue, grey',
      'eye_color': 'yellow',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/34/',
      'films': [
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/13/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-19T17:48:54.647000Z',
      'edited': '2014-12-20T21:17:50.395000Z',
      'url': 'http://swapi.co/api/people/40/'
    },
    {
      'name': 'Wedge Antilles',
      'height': '170',
      'mass': '77',
      'hair_color': 'brown',
      'skin_color': 'fair',
      'eye_color': 'hazel',
      'birth_year': '21BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/22/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/14/'
      ],
      'starships': [
        'http://swapi.co/api/starships/12/'
      ],
      'created': '2014-12-12T11:08:06.469000Z',
      'edited': '2014-12-20T21:17:50.341000Z',
      'url': 'http://swapi.co/api/people/18/'
    },
    {
      'name': 'Wicket Systri Warrick',
      'height': '88',
      'mass': '20',
      'hair_color': 'brown',
      'skin_color': 'brown',
      'eye_color': 'brown',
      'birth_year': '8BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/7/',
      'films': [
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/9/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-18T11:21:58.954000Z',
      'edited': '2014-12-20T21:17:50.369000Z',
      'url': 'http://swapi.co/api/people/30/'
    },
    {
      'name': 'Wilhuff Tarkin',
      'height': '180',
      'mass': 'unknown',
      'hair_color': 'auburn, grey',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '64BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/21/',
      'films': [
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/1/'
      ],
      'species': [
        'http://swapi.co/api/species/1/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-10T16:26:56.138000Z',
      'edited': '2014-12-20T21:17:50.330000Z',
      'url': 'http://swapi.co/api/people/12/'
    },
    {
      'name': 'Yarael Poof',
      'height': '264',
      'mass': 'unknown',
      'hair_color': 'none',
      'skin_color': 'white',
      'eye_color': 'yellow',
      'birth_year': 'unknown',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/48/',
      'films': [
        'http://swapi.co/api/films/4/'
      ],
      'species': [
        'http://swapi.co/api/species/25/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-20T10:34:48.725000Z',
      'edited': '2014-12-20T21:17:50.437000Z',
      'url': 'http://swapi.co/api/people/57/'
    },
    {
      'name': 'Yoda',
      'height': '66',
      'mass': '17',
      'hair_color': 'white',
      'skin_color': 'green',
      'eye_color': 'brown',
      'birth_year': '896BBY',
      'gender': 'male',
      'homeworld': 'http://swapi.co/api/planets/28/',
      'films': [
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/5/',
        'http://swapi.co/api/films/4/',
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/'
      ],
      'species': [
        'http://swapi.co/api/species/6/'
      ],
      'vehicles': [],
      'starships': [],
      'created': '2014-12-15T12:26:01.042000Z',
      'edited': '2014-12-20T21:17:50.345000Z',
      'url': 'http://swapi.co/api/people/20/'
    },
    {
      'name': 'Zam Wesell',
      'height': '168',
      'mass': '55',
      'hair_color': 'blonde',
      'skin_color': 'fair, green, yellow',
      'eye_color': 'yellow',
      'birth_year': 'unknown',
      'gender': 'female',
      'homeworld': 'http://swapi.co/api/planets/54/',
      'films': [
        'http://swapi.co/api/films/5/'
      ],
      'species': [
        'http://swapi.co/api/species/30/'
      ],
      'vehicles': [
        'http://swapi.co/api/vehicles/45/'
      ],
      'starships': [],
      'created': '2014-12-20T16:57:44.471000Z',
      'edited': '2014-12-20T21:17:50.468000Z',
      'url': 'http://swapi.co/api/people/70/'
    }
  ];
}