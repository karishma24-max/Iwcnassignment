
const  data= [
{
    "id":1,
    "name":"Onboarding Call"
},
{
    "id":2,
    "name":"Google Search Control Access"
},
{
    "id":3,
    "name":"Google Analytics Access"
},{
    "id":4,
    "name":"Website Acess"
},
{
    "id":5,
    "name":"Technical Audit"
},
{
    "id":6,
    "name":"Anchor Test and SEmantic Analysis"
},
{
"id":7,
"name":"Competitor Analysis"
},
{
"id":8,
"name":"Anchor test /Url Mapping"
},
{
"id":9,
"name":"Google Data Studio Report + Local Reporting Suite"
},
{
"id":10,
"name":"Site level Optimization"
},
{
"id":11,
"name":"On Page Optimization"
},
{
"id":12,
"name":"Content Creation"
},
{
"id":13,
"name":"Content Publishing"
},
{
"id":14,
"name":"Premium Press Release"
},
{
"id":15,
"name":"Authority Niche Placements"  
},
{
"id":16,
"name":"Review Management"
},
{
"id":17,
"name":"Index Links"
},
{
"id":18,
"name":"Video Recaps"
}

]

function AppComponent()
{
                const [mapdata,setMapdata]=React.useState(data)
                   
                function handleEdit (id, field, value){
                    const newData = mapdata.map(item => {
                      if (item.id === id) {
                        return { ...item, [field]: value };
                      s} else {
                        return item;
                      }
                    });
                    setMapdata(newData);
                  };
            
                            return(
                                <table >
                                <thead>Month1</thead>
                                  {mapdata.map((ele,i)=><tr>
                                  <td  style={{border: "1px solid black"}} contentEditable={true} onBlur={e => handleEdit(ele.id, 'name', e.target.textContent)}>{ele.name} </td> </tr>)} 
                                </table>
                            )
                        
}