import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendData() {
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: '¡Muchas gracias por participar!',
      allowOutsideClick: true
    }).then((result) => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
        location.reload();
      }
    });
  }
}
