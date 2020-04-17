let baseUrl = "http://www.sflnkgo.xyz/";
var addlink = "";
const download = document.querySelector('.download');

function string_reverse(strinput)
            {
                var stroutput="";
                for (var iterasi = strinput.length - 1; iterasi >= 0; iterasi--)
                {
                    stroutput=stroutput+strinput.charAt(iterasi);
                }
                return stroutput;
            }
            function Enkrip(input)
            {
                var str_enkrip="";
                var kodeASCII;
                for(var iterasi = 0; iterasi < input.length; iterasi++)
                {
                    kodeASCII=input.charCodeAt(iterasi);
                    if (kodeASCII%2==0)
                    {str_enkrip= str_enkrip+String.fromCharCode(kodeASCII-1);}
                    else
                    {str_enkrip=str_enkrip+String.fromCharCode(kodeASCII+1);}
                }
                str_enkrip=string_reverse(str_enkrip);
                addlink = str_enkrip;
            }
        Enkrip(download.href);
download.href = baseUrl + "?" + addlink;