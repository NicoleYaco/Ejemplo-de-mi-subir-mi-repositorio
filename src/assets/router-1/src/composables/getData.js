export const useGetData =() =>{

    const getData = async (url)=>{
        try{
            const {data} = await axios.get(url);
            PokemonsView.value = data.results;
        }catch (error){
            console.log(error);
        }
    }
};