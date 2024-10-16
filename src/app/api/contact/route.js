import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'somarixcod@gmail.com',
      subject: `Mensaje de ${name} vía formulario web`,
      text: `Nuevo mensaje del formulario web:
    
    Nombre: ${name}
    Email: ${email}
    Mensaje:
    ${message}
    
    Este correo ha sido generado automáticamente desde el formulario de tu sitio web.`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #333333;
            }
            p {
              font-size: 16px;
              color: #555555;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #888888;
            }
            small {
              color: #777
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Nuevo mensaje del formulario web</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
            <div class="footer">
              <small>Este correo ha sido generado automáticamente desde el formulario de tu sitio web.</small>
            </div>
          </div>
        </body>
        </html>
      `,
    });


    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ success: false, error: 'Error al enviar el mensaje' }, { status: 500 });
  }
}
