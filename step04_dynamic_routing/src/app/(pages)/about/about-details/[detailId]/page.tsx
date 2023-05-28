export default function AboutDetailsDynamic( {params} : {params:{detailId:string}})
{
    return(
<div>This is About Detail page {params.detailId}.</div>
    )
}