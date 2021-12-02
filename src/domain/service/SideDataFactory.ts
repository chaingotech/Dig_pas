import SideData from "@/domain/model/SideData";

class SideDataFactory {
  fromJson (data: any): SideData {
    const sideData = {
      partName: data.title,
      partImage: data.img,
      countryName: data.data.attributes.customAttributes.origin,
      specieName: data.data.attributes.customAttributes.specie.text,
      specieScientificName: data.data.attributes.customAttributes.specie.value,
      default: data.default,
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
