export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Nescao' },
      { id: 12, name: 'Leonardo' },
      { id: 13, name: 'Andres' },
      { id: 14, name: 'Claudia' },
      { id: 15, name: 'Laila' },
      { id: 16, name: 'derek' },
      { id: 17, name: 'lance' },
      { id: 18, name: 'camilo' },
      { id: 19, name: 'quemadito' },
      { id: 20, name: 'Test' }
    ];
    return { heroes };
  }
}
