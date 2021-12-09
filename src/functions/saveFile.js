const saveFile = (world) => {
    try{
      localStorage.setItem('UC_Save:World', JSON.stringify(world));
    }catch(e){
      alert('Unable to save.')
    }
}
export default saveFile;