import SideData from "@/domain/model/SideData";

class SideDataFactory {
  fromJson (data: any): SideData {
    console.log('data from json', { data })
    const sideData = {
      partName: data?.partName,
      partImage: data?.img,
      countryName: data?.data?.countryName,
      specieName: data?.data?.specieName,
      specieScientificName: data?.data?.specieScientificName,
      default: data?.default,
    }

    return new SideData(sideData);
  }

  getDefault(): SideData {
    const sideData = {
      partName: '',
      partImage: require('@/assets/guitar/sides.svg'),
      countryName: 'Brazil',
      specieName: 'Brazilian Rosewood',
      specieScientificName: 'Dalbergia nigra',
      default: true,
    }

    return new SideData(sideData);
  }
}

export default new SideDataFactory()
