const url = 'savan.json'
async function data() {
    const response = await fetch(url);
    const jd = await response.json();

    document.write("<div style=\"color:blue;margin:20px;\"><h1 align=\"center\">Find The Best logo You Want to Purchase</h1></div>");
    document.write("<table cellspacing=0 style=\"background-color:aliceblue;color:rgba(0,0,255,0.5); text-align:center; display:flex-box;position:relative;margin:auto;\">");
    for (var j = 0; j < jd.length; j = j + 4) {
        document.write("<tr>");
        for (var i = j; i < j + 4; i++) {
            document.write("<td style=\"padding:10px 10px; width:300px; border:2px solid lightblue; border-radius:10px; box-shadow: 3px 3px 3px light blue;\">");
            document.write("<img src=" + jd[i].img + " height=\"200px\" width=\"250px\">")
            document.write("<p>" + jd[i].name + "</p>")
            document.write("<button type=\"submit\">purchase</button>");
            document.write("</td>");

        }
        document.write("</tr>");
    }
    document.write("</table>");

}
data();


