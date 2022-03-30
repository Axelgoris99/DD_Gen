# Model Proposal


## Character

Initially we want a character to have the following data

```json
{
  "name": "Axel",
  "gender": "Male",
  "race": {
    name: "Dwarf"
    ...
  },

  "class": {
    name: "Paladin",
    ...
  },
  "background" : {
    "name": "Acolyte"
    "description": "A very good description"
    ...,
  }
  "ability_score": {
  "cha": 1,
  "con": 2,
  "dex": 3,
  "int": 4,
  "str": 5,
  "wis": 6,
  }
}
```

The idea is to upon entering the app is to randomly create a character. Then the user can customize it. 

