var playlist = {maluma: "4 babys"};

function updatePlaylist (obj, key, value){
  obj[key] = value;
  return obj;
}

function removeFromPlaylist (obj, key){
  delete obj[key];
  return obj;
}