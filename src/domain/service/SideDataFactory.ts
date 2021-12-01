import SideData from "@/domain/model/SideData";

class SideDataFactory {
  fromJson (data: any): SideData {
    const sideData = {
      partName: data.title,
      countryName: data.data.attributes.customAttributes.origin,
      specieName: data.data.attributes.customAttributes.specie.text,
      specieScientificName: data.data.attributes.customAttributes.specie.value,
      default: data.default,
    }

    return new SideData(sideData);
  }
}

export default new SideDataFactory()
