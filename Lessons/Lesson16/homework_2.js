var names = ['yoss',"baruch","victor","Motti","Shaul"]
function PrintStudentName(names)
{
    var index=0;
    names.forEach(element => {
        console.log(`${++index}.${element}`);
    });
}
PrintStudentName(names);