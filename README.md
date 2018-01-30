# GeoLocation
A small project about Google Map API.

### Goal
Record User Infomation ( Username, Latitude, Longitude, Address, DeviceInfo) to back-end DB (MongoDB).

### Front end
- [x] Migrate to React
- [x] Get Address from Google API based on lantitude and longitude
- [x] Send Request to back-end
- [ ] Add search box 
- [ ] Record multiple address of the same user and display on the map 
- [ ] Pagination

### Back end
#### geo_core
- [x] Connect to MongoDB to store user information { username, latitude, longitude, address, userAgent, time }
