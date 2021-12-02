export default class SideData {
  partName: string;
  partImage: string;
  countryName: string;
  specieName: string;
  specieScientificName: string;
  default: boolean;

  countryData: any = {
    'Brazil': {
      'img': '/images/countries/Brazil.jpg',
      'link': 'https://bedellguitars.com/blog/bedell-guitars-and-the-worlds-largest-library-of-brazilian-rosewood',
    },
    'USA': {
      'img': '/images/countries/USA.jpg',
      'link': 'https://bedellguitars.com/blog/sitkathe-majestic-sound-of-everyones-favorite-guitar-top',
    },
    'Guatemala': {
      'img': '/images/countries/Guatemala.jpg',
      'link': 'https://bedellguitars.com/seed-to-song/the-tonewood-certification-project/suppliers/costocel',
    }
  };

  specieData: any = {
    'Brazilian Rosewood': {
      'img': '/images/species/Brazilian-Rosewood.jpg',
      'link': 'https://www.wood-database.com/brazilian-rosewood/',
    },
    'Mahogany': {
      'img': '/images/species/Mahogany.jpg',
      'link': 'https://www.wood-database.com/honduran-mahogany/',
    },
    'Sitka Spruce': {
      'img': '/images/species/Sitka-Spruce.jpg',
      'link': 'https://www.wood-database.com/sitka-spruce/',
    },
  }

  constructor (data: any) {
    this.partName = data.partName;
    this.partImage = data.partImage;
    this.countryName = data.countryName;
    this.specieName = data.specieName;
    this.specieScientificName = data.specieScientificName;
    this.default = data.default;
  }

  get getPartName (): string {
    return this.partName;
  }

  get getPartImage (): string {
    return this.partImage;
  }

  get getCountryName (): string {
    return this.countryName;
  }

  get getCountryLink (): string | null {
    return this.countryData[this.countryName].link;
  }

  get getCountryImage (): string {
    return this.countryData[this.countryName].img;
  }

  get getSpecieName (): string {
    return this.specieName;
  }

  get getSpecieScientificName (): string {
    return this.specieScientificName;
  }

  get getSpecieLink (): string {
    return this.specieData[this.specieName].link;
  }

  get getSpecieImage (): string {
    return this.specieData[this.specieName].img;
  }

  get isDefault (): boolean {
    return this.default
  }
}
