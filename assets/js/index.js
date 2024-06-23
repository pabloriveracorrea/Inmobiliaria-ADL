//-----------------ventas de propiedades--------------

const propiedades_ventas = [
  {
    nombre: 'Apartamento de lujo Providencia',
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/316311414.jpg?k=812802ded9148943b0880a732ae82a197f02ceebec12ac6ed2e3759b434df081&o=&hp=1',
    descripcion:
      'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    sanitario: 4,
    costo: 5000,
    smoke: true,
    pets: false,
  },

  {
    nombre: 'Apartamento acogedor en pleno centro de Santiago',
    src: 'https://www.bienesonline.com/chile/photos/increible-departamento-de-lujo-id4451-con-tour-virtual-DEV933791558713245-859.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 3,
    sanitario: 1,
    costo: 5000,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Apartamento de lujo las Condes ',
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-5710454/original/9fa2bc0c-4a1b-4be7-b751-5f5b2547eac4.jpeg?im_w=720',
    descripcion:
      'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 5,
    sanitario: 4,
    costo: 50000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Casa en villuco',
    src: 'https://loff.it/wp-content/uploads/2018/01/loffit-sothebys-vende-una-casa-de-lujo-en-el-corazon-de-la-riviera-francesa-04.jpeg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    sanitario: 1,
    costo: 250000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Casa en Vilumanque',
    src: 'https://pic.le-cdn.com/thumbs/520x390/08/1/properties/Property-6bf4cfcb0f0ec7de86673f54bd343b4d-71562365.jpg',
    descripcion:
      'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 6,
    sanitario: 5,
    costo: 100000,
    smoke: true,
    pets: false,
  },
  {
    nombre: 'Apartamento las Condes',
    src: 'https://www.santiagohotels.net/data/Pics/OriginalPhoto/15611/1561168/1561168291/pic-santiago-31.JPEG',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 4,
    sanitario: 1,
    costo: 100000,
    smoke: true,
    pets: true,
  },

  {
    nombre: 'Barrio Patrimonial',
    src: 'https://static2.mansionglobal.com/production/media/article-images/24b99fbd82137d3b339d8ea6fbae1068/large_StTropezLead.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 3,
    sanitario: 1,
    costo: 800000,
    smoke: true,
    pets: true,
  },

  {
    nombre: 'Casa en lihuen',
    src: 'https://img.jamesedition.com/listing_images/2024/04/22/15/16/05/c81d99f6-fc79-4a80-9de0-71d15bde923c/je/760x470xc.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 4,
    sanitario: 1,
    costo: 1200000,
    smoke: true,
    pets: true,
  },

  {
    nombre: 'Casa limache',
    src: 'https://www.canexel.es/wp-content/uploads/2015/02/casa-de-lujo-nueva-york.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    sanitario: 1,
    costo: 5000000,
    smoke: true,
    pets: true,
  },

  {
    nombre: 'Casa las Condes',
    src: 'https://img.jamesedition.com/listing_images/2024/04/25/11/17/04/711d35c2-6b9a-4578-9485-02afb56d02cc/je/760x470xc.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 3,
    sanitario: 1,
    costo: 120000,
    smoke: true,
    pets: true,
  },

  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://img.jamesedition.com/listing_images/2023/05/24/15/03/52/4a2c3df8-81aa-4a6b-8bb2-9b1b3ef11264/je/507x312xc.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    sanitario: 1,
    costo: 1200000,
    smoke: false,
    pets: false,
  },

  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://img.jamesedition.com/listing_images/2024/05/29/15/59/58/9776f59f-e9f0-49c1-8355-23da68a538ca/je/760x470xc.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 3,
    sanitario: 1,
    costo: 1200000,
    smoke: false,
    pets: false,
  },
];
//--------------------------------------alquiler--------------------------

const propiedades_alquiler = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1194i215%2F77yxd2feqje84x6mmjqvj7bqd3i215&option=N&h=472&permitphotoenlargement=false',
    descripcion:
      'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    sanitario: 4,
    costo: 5000,
    smoke: true,
    pets: false,
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://www.john-taylor.es/venta-piso-manhattan-680x400-80-V0028US-116713114.jpg?datetime=2024-06-14_1',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 6,
    sanitario: 4,
    costo: 12000,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Apartamento de lujo',
    src: 'https://www.john-taylor.es/venta-casa-de-pueblo-manhattan-600x400-80-V0018US-101930884.jpg?datetime=2024-06-14_1',
    descripcion:
      'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Calle Siempreviva, CA 45678',
    habitaciones: 4,
    sanitario: 4,
    costo: 5000,
    smoke: true,
    pets: false,
  },
  {
    nombre: 'Casa acogedor en la montaña',
    src: 'https://img.jamesedition.com/listing_images/2024/05/31/14/08/09/58f3b135-7df3-4d73-8599-88c089ea23ff/je/507x312xc.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 3,
    sanitario: 2,
    costo: 7200,
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Casa de campo en zona exclusiva',
    src: 'https://img.jamesedition.com/listing_images/2023/11/30/17/10/23/80dcce11-9c87-483f-9cc5-f023f6ac2078/je/507x312xc.jpg',
    descripcion:
      'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    sanitario: 4,
    costo: 7200,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Home Studio acogedor en el centro de la ciudad',
    src: 'https://genexigente.com/wp-content/uploads/2023/09/Hotel-Aman-New-York-USA-14.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    sanitario: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Home Studio acogedor en el centro de la ciudad',
    src: 'https://static.mansionglobal.com/production/media/listing_images/d86de78dafa232d451ef9047bb015d6e/small_328bb7eddccedfb83e1358dcc88216.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    sanitario: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },

  {
    nombre: 'Home Studio acogedor en el centro de la ciudad',
    src: 'https://www.john-taylor.es/venta-piso-manhattan-680x400-80-V0110US-139200332.jpg?datetime=2024-06-14_1',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    sanitario: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },

  {
    nombre: 'Home Studio acogedor en el centro de la ciudad',
    src: 'https://img.jamesedition.com/listing_images/2023/12/29/09/18/45/191062fc-edc5-4c7e-a2e8-4e484f1db483/je/507x312xc.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    sanitario: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
];

const ventaHome = document.querySelector('#ventasPropiedades');
const alquilerHome = document.querySelector('#alquileresPropiedades');
// funcion para generar la card con sus datos dinamicos
function generarTarjetaPropiedad(propiedad) {
  return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${
                  propiedad.src
                }" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${
                      propiedad.ubicacion
                    }</p>
                    <p><i class="fas fa-bed"></i> ${
                      propiedad.habitaciones
                    } | <i class="fas fa-bath"></i> ${propiedad.sanitario}</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${
                      propiedad.smoke
                        ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                    }
                    ${
                      propiedad.pets
                        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                        : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`
                    }
                </div>
            </div>
        </div>`;
}
//funcion para mostrar en pantalla los datos de lso array

function renderizarPropiedades(propiedades, contenedor, limit = null) {
  let html = '';
  const propiedadesToRender = limit ? propiedades.slice(0, limit) : propiedades;
  propiedadesToRender.forEach((propiedad) => {
    html += generarTarjetaPropiedad(propiedad);
  });
  contenedor.innerHTML = html;
}

// Renderizar propiedades en la página principal (solo 3 de cada tipo)
if (ventaHome) {
  renderizarPropiedades(propiedades_ventas, ventaHome, 3);
}

if (alquilerHome) {
  renderizarPropiedades(propiedades_alquiler, alquilerHome, 3);
}

// Renderizar todas las propiedades en las páginas específicas
const allVentasContainer = document.querySelector('#allVentasPropiedades');
const allAlquileresContainer = document.querySelector(
  '#allAlquileresPropiedades'
);

if (allVentasContainer) {
  renderizarPropiedades(propiedades_ventas, allVentasContainer);
}

if (allAlquileresContainer) {
  renderizarPropiedades(propiedades_alquiler, allAlquileresContainer);
}
