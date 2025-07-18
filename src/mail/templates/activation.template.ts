export const activationTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=">
    <title>{{title}}</title>
</head>

<body style="margin:0;font-family:arial">
    <table style="border:0;width:100%">
        <tr style="background:#eeeeee">
            <td style="padding:20px;color:#808080;text-align:center;font-size:40px;font-weight:600">
                {{app_name}}
            </td>
        </tr>
        <tr>
            <td style="padding:20px;color:#808080;font-size:16px;font-weight:100">
                {{text1}}<br>
                {{text2}} {{app_name}}.<br>
                {{text3}}
            </td>
        </tr>
        <tr>
            <td style="text-align:center">
                <a href="{{url}}"
                    style="display:inline-block;padding:20px;background:#00838f;text-decoration:none;color:#ffffff">{{actionTitle}}</a>
            </td>
        </tr>
    </table>
</body>

</html>`;
