import { makeAutoObservable } from "mobx";

export default class ToyStore {




  constructor() {
		this._selectedType = {};
    this._types = [
      { id: 1, name: "Toys for Girls" },
      { id: 2, name: "Toys for Boys" },
      { id: 3, name: "Lego" },
      { id: 4, name: "3-6 age toys" },
    ];
    this._brands = [
      { id: 1, name: "Baby's pleasure" },
      { id: 2, name: "Baby Shark" },
    ];
    this._toys = [
      {
        id: 1,
        name: "Blond Barbie",
        price: 1000,
        rating: 5,
        img: "https://target.scene7.com/is/image/Target/GUEST_d8988f0b-6d17-43e7-81e4-beeb9daf78a9?wid=488&hei=488&fmt=pjpeg",
      },
      {
        id: 2,
        name: "Blond Barbie",
        price: 2000,
        rating: 5,
        img: "https://target.scene7.com/is/image/Target/GUEST_d8988f0b-6d17-43e7-81e4-beeb9daf78a9?wid=488&hei=488&fmt=pjpeg",
      },
      {
        id: 3,
        name: "Blond Barbie",
        price: 3000,
        rating: 5,
        img: "https://target.scene7.com/is/image/Target/GUEST_d8988f0b-6d17-43e7-81e4-beeb9daf78a9?wid=488&hei=488&fmt=pjpeg",
      },
      {
        id: 4,
        name: "Blond Barbie",
        price: 4000,
        rating: 5,
        img: "https://target.scene7.com/is/image/Target/GUEST_d8988f0b-6d17-43e7-81e4-beeb9daf78a9?wid=488&hei=488&fmt=pjpeg",
      },
      {
        id: 5,
        name: "Blond Barbie",
        price: 5000,
        rating: 5,
        img: "https://target.scene7.com/is/image/Target/GUEST_d8988f0b-6d17-43e7-81e4-beeb9daf78a9?wid=488&hei=488&fmt=pjpeg",
      },
    ];
		
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(toys) {
    this._toys = toys;
  }
	setSelectedType(type){
		this._selectedType = type
	}

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get toys() {
    return this._toys;
  }
	get setSelectedType(){
		return this._selectedType;
	}
}
