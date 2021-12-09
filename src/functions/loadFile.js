const loadFile = () => {
    try{
      let loadFile = localStorage.getItem('UC_Save:World');
      console.log('Load:', JSON.parse(loadFile))
    }catch(e){
      alert('No save file found.')
    }
}
export default loadFile;