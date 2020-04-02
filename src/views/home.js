import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import Carousel from '../components/carousel';

const Home = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    const [state, setState] = useState({
        galery: [
            {
                id: 1,
                image: 'http://placehold.it/1900x1080',
                title: "First Slide",
                description: "This is a description for the first slide."
            },
            {
                id: 2,
                image: 'http://placehold.it/1900x1080',
                title: "Second Slide",
                description: "This is a description for the second slide."
            },
            {
                id: 3,
                image: 'http://placehold.it/1900x1080',
                title: "Third Slide",
                description: "This is a description for the third slide."
            }
        ]
    })
    return (
        <>
            <Carousel slide={state.galery} />
            <div className="row">
                <div className="col-12 mb-3 ml-3">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91O4hc7ndoL.jpg" id="homeimg" />
                    <img src="https://i.pinimg.com/originals/96/73/da/9673da5d2afc6cbf50d126bebec20b6b.jpg" id="homeimg" />
                    <img src="https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif" id="homeimg" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81qQy7RUiLL.jpg" id="homeimg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYOtOp64iXSmTpjSAbKsvUAlT1oQricDMPgWKwhlDgFAKtCDVV" id="homeimg" />
                    <img src="https://i.pinimg.com/originals/2c/e7/f0/2ce7f0f0f99aa610fe3e73db4f2d4f4f.gif" id="homeimg" />
                    <img src="https://i.ebayimg.com/images/g/k9kAAOSwwy5bcvJP/s-l300.jpg" id="homeimg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUjB08wgchd7GdhcHRw1-ohDilPk_h-ihZZwYg-cesvKbduIcj" id="homeimg" />
                    <img src="https://cdn.shopify.com/s/files/1/0865/6500/products/s-l1600_b656aafb-c1a5-4c91-beaa-4c837af8e1a3_1024x1024.jpg?v=1571439284" id="homeimg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwI6qKhB8yiPGgd-wPStBnAHZuCbIr9jh9Bwhl7jaL-2zRb4iS" id="homeimg" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71eoW-yDbRL.jpg" id="homeimg" />
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGB0aGRcXGBodFxofHx0aGBodGh0YHSggHRolGxoXIjEiJSkrLi4uHx8zODMtNygtLisBCgoKDg0OGxAQGzUlICUtLS0vLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABJEAACAAMFBAYGBgcIAQUBAAABAgADEQQFEiExBkFRYSJxgZGhsRMycsHR8AcjQlJi4TNDU4KSssIUFiRjc6LS8ZNEVIOzwxX/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAApEQACAgICAQMEAgMBAAAAAAAAAQIRAyESMQQiQVETMmGBQnEUM7Ej/9oADAMBAAIRAxEAPwBamSg2lAd8VZyEajcK08PdHMufTd8YsLaO0dWf5wgrBz5dkcS0q9IIzbOrZjuOXyIis1lPpAT85x1mVs1P6K7D9az/ALNPFzQeCv3xpdYVfo4smCzM++Y57lAQeIY9sNJjYdC8juR4THLisC7ba2D1XPDu4jeOX/UEZM0MoZTkfk15xikno7jWyDDnENrvBZeWrfdH9XAeMe2uYTUKaU3+4fGAE+TQ6b84XObXQyKvstzbQzVZjoMhu4ZRxY7WUzHqnVfeOcQ2j1AADUndyjyVJNOlkOEIt3YylQy2acHAZTUfPcY8tNoAyELE68RKqUIB4E5NyPuOo5x9IvtJyY1PIg6qd4PCHrJoD6fuWLdau6FK879COlR9W7YMW8NSoPsmhHHSLV4W4PUA9Hz/AChP23P+Hl85tQeoa9kJ53JIdxqNjBap3OBM1qmK11W0zJSmvXyIyMWQDDlGjG7R8seXrnZ5g4YWHYw+MSAR5aVrLmLxQ+X5QSewWtCq+vXFq7P0qe0PMRUlVZeyvdr8YvXSPrZftDzhkxUAntZ+o6n/AJhDF9Hn67933wt7WN0pQ4K3i0Mn0eJlO4VUeEJ/iG+xntmo6jEUvUR1aV6Q6j5GIJGsK9wl0S2jVuqJLU3q9URT9/UfOPrcTUfPCONMVKmOKkb4nKRwy1ikURGe3GDdx2gMQGHwgFMSC2z0okgA6kLx1yHnGS6Nj2foTZ2z+jsslPwA9+fvi3aHopPKOZk5UopNKAU8oG37eKS7PMmFhRQBkQSSSFUD8RYgAbyYJtJCkm3YOe3piIqajgIhm32kg1xqEbJqkAq1Oi1D3EeydxhbS45s0hrQ7gHSSjFUX2yhBduOdIJ2e5ZSerKRTxCivfrHnvPRevHXuyeTfMtz0HVupgfLnF5bWGFKaQAtWzUhszKSvEKAR1EZxNY7snSwxlzCwWn1c0k5Z6P63fiEZDJydI6eFJXYUtltCEchCjfe02GpLhRxOkD9qb7ns4SVKdCwADOKgH8GGoY/NIV/7m2ic5aaxHOYasTvoo9XwhuquTpAxg7pLZ3b9sJZ9Uu55Ll1gmgMU7HtcVcky3wMDiAIq3DIboYrNsbIQdIFz+LTuEWGuaSuQlIOwQH18Uekx3+PN9sW7dtpOPqS/RjdRQT3n4QNW9zNNJs1mJ++Tkfwg5d0MlrsaAUAA5boXrbYFzyh2PJB9KheTx5L3CezM0q8yUeAcD/a1OXqmGRBCLYJ7yJiuOmFBGFjuOoB13A00y3Ree/rS+aMiqcxhTP/AHVMP76J9x0xvpnH2HXmD4iEFZ06aSGmzG49IgDsWgrwh1uWVSRLH4a95JjGqOUrAOy9DPlq2YLkHqIIMWLqlFJ6o1ao5U9lRXLjSsQ7NJW2DkzHur8YO22Tht6nc9G7aEHyhmRi4FDaBqvL9lv5jDh9HHqTeGIeUKW1P6VOSdmbGG/6OfUme0PIQr+Ix9jJaU6a9RivKlEN884tWmYBMU8jpHPpRrhasLZxVn7+3ziS1L0h87hEU3MsPnWJZ7jEeifD4xhpiwqNc48bujsR7iigWVnlHcYYdkJBM+SOMxPBgx8oAzDDdsEtbXZucz/85h84xmo12/Nx5V7v+4T5dpE21S5Y9VQ01jTI4aInWMTFhzUQ3XxKxSKbwufdQ++EjZVSbVaCd0uUvVm5PjEvkfcNwLQzFItWOyYjyiGCN3TxTDv84RgipT2Nyyajoit1jA6QGW/lFWxEY6feFPf8YI2+1YVPE5CAdnJLim7OvCHZIqOVcQMbcoOyOzSwrO33Qe+BKyCxouu/4wUE5WMxa0xnomAb2lpbniDQjjE0kqXxsphdv5Da2NAmE511hbviyFKkZjxHXBmXeaMtagcRX4wuXxeeOqqaLx3n4Q7KsfFV+gMP1Oe/2ArYYB2vWCVpaBk45x2JDsjIDKijaCZTV+yxoeFdx7dD3wUCRFbLOHVlO8RTGVMROHKOjmzTSyEb8WEdo/OHiStAF4ADuyhI2YQlhiywsS3WKAeIrDrLMMZJAD7LWajzZv4yg76n3CDt6r9fZW9oeFYjkywowqKAV8SSfEmObfaPrrIDxbyp5xr2zqpA7an9Io/yx/M0OH0dp9XMP4h5CE/ag/XL/pjzaHf6OR9U/te4QPsjn2w9Pk9MV0CnWIZrjRFA/FSLVt9YeyYqShWnDlC2aisDvPARJKnU9cBhx+0PiIsYshSgXq0Gm7siOYorlpujKo2zG+2PnEe4I8EvnFAshoK8IddgEH9qs3+of/rmQnMIathpoFqs3KaPFWX3mOZqNntYyMJt0WYJPtJGhwDuxf8AUMl9Wsr0F9Y7+HDtMKuz1pDzbSAclwgdhYE9pqYl8mS6G4Fqw0WyiFpxGYiVhFWaIg2VKmfWi0ltTWPrJMBVkBo7aE7+UU5pimJvTVd5Ir3wUMj5WwnBcaJfREsQ3RC5typ8eMCL2tuN6gUGg5jnF68LzRZ7qx6LDCe4QIlJLNQZwBByqNeGcM+nKqj8nRnFO5/GirMMUp7wZNhU/rR89sU7Tdn+YO784xYZ/Ax5ofIvWl84pDODE+66n1+4fnHH/wDJ/H3j84rjjkkTyzRb7ByLHuGLU+xumZoR94advCIgsC7XYyLT6AFntzSp8ygrnWmlcvPKHO6b0lzgApo1PUOTdnHshAvE4bQ535ERfkpUVzpqD87xxivuKPObqbX5NDSF69LbW0gjSWQO41MV7Pfk1FKnp5dFj6wPEnf25wNs+tOO+Cxx9zMkvYZNpx9ePYXzYw+fR2v1Ln8XuEZ7e8zFMRuMqX5GNM+j1B/Zid+M+6F1qjbCVtBL/umKsgHKg64s3vaBLLOczhwgcSd3Ic4y3ay2T5pPSDIMjKLES+eY6NeusJk1yobCDas03InI1PAEHwBrELMa1Onl1/GMEttmlMPSSR6N0PSSlHRhwK68QYatkvpEmymWXbGM2VUD0v6yXuq/31G/eBU5wfC1oB6YOM3iY+DjjDH/AHSf9uv/AIz/AMo+Oxz/ALaX/wCNv+UFzRnBi0xg3snMItVn/wBUeIaLB2Of9sn8Df8AKLV17OvKnSmM1WwzEJARh9oDWvONU0dxY8W+3nCxA6eE4ebUy13wqfRteMtZ88TGCosj0hLGgARqMTXQDGNYOW8VxCM6vOyM1pwKwVp31bVyUliCD2uqV74CeOpX7DIvVGnv9IlhGWJuxDTyiOdt7d/7Re1SPMQn2dEsktZToGmAfWEAHpHM1J8uEBL1tFmcFvRsuebIvRFdMRFVB64Usrb+11/Q7/Hild1+xxvDb6xAVUoTCtL29V54NaLoTooB5cOcI9umICcyRxp5wNZlJ6JziiONfAiUqfd/s0TaBm9K5r9qo8CDFC97xJRQpIqKmnHhHliLTbKjasKof3dPCkC7yUrkRSEwltoplFNKX4I/7wz1yxBvaUExKu0lqPqhP4fzgHXpVP590FLskTZs5ZCoqOd81giigrmTkMop4v2I+UfcsNfdtP21XqRY6l31bR+sB61WnlAM3seXd+cF7FdlpmswUoCqhjiqMuRzjuEjvqYugtZNqmWgnyxQ5Yl07QcoITEXJ5ZBltmpG7iDzHCFKVaas0tqMVyODNfCD93SSqgaA5kfO/dWE5VrZThq7ixZv0UnE8V95EX5DYVVeA8dTEO0ppOQjgezOvviCzTOMOxrlBEmZ8cjL1amJrO2YiuGi1dlnM2YqDec+Q3nuh3Qrtha8BQyv9GX740H6Pbx+rMs7ySp7sS9wBHbCbtdLAmy6ZAyqD90keREWdmLaZYVhuavj8KxPL5HL4Hna2XiKZEjgCBnQUqTu+d0ZzbbQZ1oaXJUzWlkJLlotcc371NPRShnnliIJzhn+kK+WltKRfSBC49IyrQYD9lWIyahrlllStTBrZbZyz2eU02QSfTSx9ZQhtSaiugOWXLOsTterkyiMvQkJFs2aWzhZTlZkwrjmUIbpE1NTqTWufdSE6/br9C/RUlCKg5kjiprqKZivMQc2msE4sXWY2Kufzx0yiOXYJs6Ykt3PolChtRMJAxMcxkcWXEAQUH72dOOqrocP7z2bjM/g/OPm2ns3GZ/BCawP3TEbAcCIP6aE82Oj7T2b700f/GYlsl+Wd2SjTM5ksZyyBT0iZ9dIQWUcaRfulG1xaZilN2fujuCRykzTbylFXYHcYQdrrPUh86rQnCSCaZ7tCaa6jdnGxX7dXpOmvrbxx/OM22jsTCoKnt8YbJmQdoH7RbKNKmtNsdfQTpfTlvVxmKnCScXqkUz1rCbbLBPWS8nDMRXoTgYhJhXNca5BhvrqDGt7KWvHZJYJqZdZLcarTDXrRkbtiza7sluNIhXk5Mbceyn6GPIk2YXdFi9HiMyWHYiigsQor6xyFSaaRes11zJ2CWTUCgVQtB8TTrjVF2WlYqnOC9huqXL9VAOe+Nl5smqSNj4uKLvsXdntnvQyPRkVJYty4DyhK20s1Jzjkp8I2GYlIzDbtP8S3sr5GE4W/q2US3GhEl2YHIiL8iS+KuMmuRxgMCNKGoqRTLqi5YbEGOZpDNYrkl61iyfkcCWPjKS2hJS5Arh6KQDUIQSnUQTUjkTBGbZmmsWmzHauoFEU76EIADDPa7tljUwInItaCBj5EpaTCfjY47ohsVlVaYVCgaAfPjBBY4s8skhRvMXr5AQKBuWndAyt7GRaTSETaV6zV5A+J/KI7PXfHF4IzzThFaCkFbFcrH1mAHLWLsdRgjzM1yyOiGUrOwVBU8odLju0SVJPrnU8OQ5RBd1lSWAFHbvgnKgJzvSDxwrbKm2NCJDb+l/T74s3PYz6FSR6wLVpuOYgdtLPDEKSAJa5kmgBOZ7hSOZu2kqVKSWiPNmKgUr6iigoc26R7BASi2qQVqw/tzd0xlE4lpqqEKqXRJUvIUBFccwlhXvhi2e2lsxkyZPpRVUVasCoL06SknINWtNxBFDGO33tnbLSKMyqgIoiLQCgwjWpOROp3wHkWyYrE1rXUUybsjnhdGrLE13a4mVNBlIcXr4wSGqa6ZGlBlSA1gtLs6l6kkmpbM61rWg5xRuO2emVA0xsJDBULHJqYiBzABNNKQRwUmJ1wqMKGznqkD/AELb0bsEfLZ3H2W/hjoXw33B3mJJd6sfs07TDLYkrNZ2GqnuPwi3YZZoRhNaEaR6b1P3a/PVE1lvih9Tx/KN2cqNtszh5aMPtKp7wIoXnZA4zAPXFLZm9w0mXXIFcvwnQ9lRB2bKgmrAWmJVnuwS5jqoCiZTqxrXCe0ErX2eERtNINDXn+cMF52eogReFGliZo1aN176xD5GP+SLMGTdMgFqpHky8CASBXgOPKKD6xbWzkCu/I+MRJllIIyiStSCDw4HhGabeOP7QW4oOuoqN3WI0G33uqy6iMzvm1ia7O1AOekUYl6rQvdMAy7WysOiQDofnSDUi9CBAK02tZhCoKgGuLd2RZlAxZKCfaFRk10wjOtrPviNYiAi5YHCupIy06q5VgEktI129he7LPgGNsmI7h8YB3/eGIkjQadnxMMVslq3rE0G7j1wiXtOxzGC5CtB1CHcfYSppXJ9nt1p9rjnDBIaBN3yshBiSlBUmnM6Q1k3Zbs2sdW+8lkrxc6DhzPLlAidfIHRlZn7x0HVxgWxLGpJJPfGxhfZ0p10WnkTZsvouVIbEzfa36HjXfAG22coxBJccSel2HjDld8mkoniMudCffWFm1irmM5etoPh/wCafuweg51HHl8YkMuuUcA0NONSBzGo7RURKg8IZYijiz2p5RBQkYHVwNxK6eBIrGkmcHMuYmasAy8KEfPdGazxQw0bG2zFIMtj+jYlfZYHLsavfC8i1YcHs+lS665ecXDKb7rfwmGOTMs6qFo+W8yh76xaF5yv2kz+EfGFW/gbQoGU3Bv4TFiw3dMmtRRvpmN/DQmp3ZQzi8pJ/WuP3R8YYbisyOEmVLA9Ja1Wi1IDAA54yDQn7IJG6OuRjSQOuGS8hTJmZOCXCkUIByOtCRXPvhtsF5UAVjlu5coGzLPLadREFZS5sSxIZ6EIlTQdEYm9qXxisGoT3w2O1sF7GO15iohZtThSVbJHyP4TubvyPKJ5V4smWq8PhzileMxZikrnxHDrhWSIcNMrSkowB3HODUqXUQrWa39LAx6QyBP2hur+IDLmKcIq7QG2TKCUU9GNQWIqeLUGYGgHMmPN4VKmehfJWE9obtWYpwnPXI68BlujMto7ptC0xj6quRAyJ4Gu8QXnybYmbSA3Ayn6XuPdCveN4MW+t9LX7r46jsaK8GOUXpic2SPGmd2QKCBUd8FxKyhVa1MT0UHbFqwTZ9aLQcc8h1xTPG+yeGZdUMIWOgfGKyTWpn4RDNt2HP7ucIUW3RS5JKwjf17YRhHVAGwyqmp1iqjtNfEa03c/yizNtgUUTX72tOrjFaiee5hdp6ShVjn90amBtsvBpmWi/d+PGB1STUmvM6xKsMjBIVKbfRZkiLtnXOsRWGztMYIgLMcv++UX5FhmEgCW7AEgsqMVqDQ9ICmsa3RsVYZEyspABQBKf7m8IT7Wem0MttOCYkoGuEdLKFec1WY7qmJIbk2XZNRSB89wCDwNfjFoL5eGg8oqstcXaIsWU1A9nyigjPJ4yizcMkl2AUmiDQV3kRXb584Zfo+l9OexJHQRcubMYyTpGpWzXaH7xjzCePhHVIjecq6uq9bAecT0NOsJ6+OQjtbVMWpGAkmprVeQApWihQAOrnA+ZflmXW0Sq8AwJ/21iM7R2X/3CePwjjizZ7W8sYTgYkks2Igkk1Y0oabgBXIADdFxkxoswU6RINDUAjUV8R1wLXaGzH/1Cd/5Qy7OWuVOV5YdX0bI6Vyr3gQcG0wZdC/NQjWF232lkNQfnhD5e91FcxmOPxhMv6yZGGPZqYs2+3q+YyYZ04cxBPZ6/RNrKcgTQD1MN5HvG7thKvhWVqjIiBUq8TjDAlHBqpHEbx8DrnCMnjqaGQ8jgzULUk9CcIV14EkHsOYPbSFa+rczdF5dPaz7soYdn9r7O6UtDpKcDPFkjc1P9Oo5jOJL7ttimLlOlN1H8ojjzhKmi3lCa0zOlsgrmewaRfktQUAAEdTsArRhSsDrVectNDiPAe87ot3Il9MCe22sKtSaDxPVAWZNaYc8l1A3dvOKlpnO5xN+Q6o6Z8sI0Gp48ofCHEjyZnJ/gutaa9FchvPH8o6X5+d0VJcFbBYHmeqKLvJ0/OGdCdtlfFB257lebQt0FO/7R6hBC7rqlpuxNxbPug9JWFyyfA+GL3ZPdVllyEZlFAoJJOppxMCZL2cUHpLRXf8AVpqddH41himXW06VhDBASK1Fa76Dwil/dF/2q/wtC0/kY18CzeD4VmTT6zVC98LYGVIM7UN0qZ5nqFBuA4QBmTwuYz4xmNaGZpeqvgilHM9cSWM5Ae0PGPZigCo03GPrEc/3iOWghyJ3o9mHKDeyc/CJxE30dWUfbzoK/ZB474Ck1r861g3sfdE6dJmPLQMPSUJxAZ4Qd/IiMfRyey/NvGY3rO562Pxiu0zqjjAI+pAUFZ16Q9UcmYeJj7DX/qOvQchGmHCTjXWND+je3UtSA6TFZO2mMfyHvhAazHge4wx7KTjLnSnoejMU6HSoDf7awLaCSZuDjKFa/rkDAlMq6r8Iaicqg9UULboY1gQME2qsRUsCKEajfGf2gUYxvu2NhlzFOIZ01GTd8Y3elz4ScL5cxBYppm5YOrQFe0HDQ6+6Ll0XlNlkhHIrlQ0I5VBEU7TKC5b6xDLMHJJoTGTTND2isNnNlWcp6GDEGIGIv+ICgxl6ggZawgtaW5DqAgwZxmSVlljgD46czke+KFqkcIThXG037lGZOW0UGYnUxbslnZqAAkx3dN3mbNVaZE5xtuyGxaomJkAJ7+2GymoiY43LbM7ufZN26TjLh8YYzdTIoFKU0A0jT1utVGQgNfFlABieWST7KIRitIRJCUMFrOAoLMaKoJJ5DOBNot0tHoTUkgU8K9UV9tr5FnSXJpUzOk4GRwj1e9u+kFTZzaSKlqvEu7OTqdK6DQCPJdoNQATqBkT8dYGWO2pNBwnTUMKcuoxYRgDWoyNdRDKoXdkm1CsWYtKVBX7TAv203wvqg+6K9fupDxtJaLCykykmTcs2d1ppuQHKh+8BCmk1AP0CHPVqe7jGQ6Dyu3ZVmSiAoGlBT5BiFSVPHpYsq8h7ouzGBBOBRlWgOnIRBZf0hpl0ePONTBcboiqTXLXQZ9fCDezs+aiMiFx08WFWIrkBUgdVIgs/6SV7f9LRNZGU2pAFC1qp5k41rl7Qjk+WjJLiWsUclxHheOpFSfnrjDi9d1lLlVUFmYhVA1JOgEaNZLmSyS6AB5xHTmEaH7qV0Qd51OsV/o9ujCDaXHFJQ8HfrPqjgA33oNXq0ed5WV/aizBBWLU+0TAdY6k2t8LGueE+Ri4ZAaPplmCIx4KT4RJEvckOFit2EKDoVB6qiLFraoqNICDNEO8ov8oiot64KhvV8BHuTWjxUtlDaaZ0TGTXudY0ram1gyyQcjGY3q8KxdjMnQs285iKoiW0tVz8/OcRUioifYSu9+cTzc4qWNaDOLctGrkjHnSEy7Lcf2odfo2uwNapVRX1j3A/ERucuWABGQ/Rap/tKAgjoPr+78Y1i22sS157hALZ0+yK22lUBLGkZptjtESGEs0HHeYOXzamYEtrwjN9obRVqc4JQt7BbpFGy1Z1z1YVPbqfGAW0l4m02qZMHqlsKDggyXwFTzrBS0zcEl230wjrbLyrAO75NamHvWxCuXpJpRoAoiZDWJEkcYkVIU2ihJlmxTKZUiS1XU1ay1qp3VGVd2e6vuiOWvCCYlibLMtuzkdx+ecK5cXY7hzjXuL1plFTRhRhqNaRJYgoQsWAbEQKnMiikZddYhmpQUpQjKnDiI4w6dcPq9EqdOy5a5lVGE6GuR+Ec3I310qp0cHuIbxoO8xGu/qjywNhnD21Pu90alSBk7dhooYJ3JYGmzElr6zsFHKu/wDdFW7IeTs1ZT+qp1M3xgrcNxyZUwTEUgqDSpJ1y38qxPkyVFsdCOw7LlLLRZaCiIAoHIadsBr3fOCk2ZAK3NVtY8iTs9DFGj2zCOL0akpz+E/CLEhco8tsrFhT7zqvewr4VjYK3QbdF+f0QF4KB3CF7aA9GiwdtTZsd1YVdoraQCdKZ574959HlITbwvRgwlMct1YX73n0BMV72tRd2au/KKF5WnHhHKp64xQoXLJdlKsErssomEqa5wNEMN1JgUkxmWVILx4cpb6JpNgwUJap5DIc898dvMIOscz7SdwiHHiibb7PQpR0h6+jm20tiA6FJnkG90P061Y6sd8Y5sxailplN+Kh6mBT+qNbRegOrP56odjRLl7A19GimMzvJ6zO2NHvpugYzq8B04YuxM/tBl/v0JacSWPYAB5tEF2L0e2Pr8PTUfgB7yTEt2DojrjcnRmL7y0RHhHz89kdER7SElVEqCLcl6EcIqpEyQEg4lbaGTR1caPr1j4ikDjoOsQcvhcVnrvVh49E+cAmOnXDcTuJPnjU3+TtDr1RGr0fFwoe4nviVdIjkTCJgI1GeXWIaTs/QAEELGaKT1fGB4WLsv1e33R53kOoMtxr1HNqmZGF6baxipWC94N0TGfXxeBRieFY8+KcnSPQhSVs0CxMCI6xj06/5alz10wL4t4QrbG7RLOJlsQGpWnEDXug1dFpxrOnU/STCqclTL+asVePif1afsIzNKLaLFrbI1OWvXyjONr71opAOuUNm0NroBnujJr/ALbjmUByHyY9VbZ50nSBloeKhjpmrHdnkljQdphjZOleixdllLtkPhDJZ5KgaA8znHthuvDLDMyy5Y1dt/IAZknhFmx2RZtSqzSoyxhDhHM5+AiLJPk/werhxrGqfZRtA5V40ilv3ZiDluu1kGMHEpFajxrvFDA2ZKrmBzygYsZJEEhsJqNQajszHlGzWK0+klIwzDKCCOYjHNIfNgryrJMo6yyaeyxqO7MQ/GyXKgpfidHXKM5vdSHrGl3kuJYQr/kwxdiZL0ipfX6Rf9Me+LN2Ho/PCIL5GctvwkdoNfJhH1zzM8Pzl+UbNaF4nUgoyx5SLUtIrT3FYnTLGj1TFiXFJWzi9JjJGxJbaP8ADzuS17iD7oXCdOuGW1foJ3sH3QuMMwecHh6YryO1/RJXIdUeXfZvSTStafVzCOtVx07lMebhFzZWht1nVtHZk/jRk/qh5KbimsXU9XtimIjs96IZ0yz4gGUKQN5qtW5GlVyG4x5vk/62XYV6jq8RVYzfaRMJNY0u2CimMr2ytObRH4yuaLZOsbFu6p7C0yynrY6LTeT0VHUSQDyrG1Phky1lg1CKFB6hQn95qntjLPo7seO1elb1ZK4/3jVU/qPZDVtBfQVCa5CPapJ2eYpNoC7Z339kHM6Rns6ZWLN520zGLGKkqWWNBmTDEqRNKXJ6PpSEkAQ33TdSSZfpZoqo3faZvsgc69wqY+2auUYhUVJ5fGG247lFomY3H1EpiFX776MT+EZLzoRpWI82ddexfg8firff/Cjcmzsy1sJ0/oyvsIMsuCDcutW1MPX9lVECIoVQKAAUA6otqtI4cVjzp5XP+iyMUhavG7wA2XRbUeGIc93MQozbCELKD0a1HI7x1UpGntIBFKQkX3ZMJ9nIny8CB2Q3DN9GySexNnDhuizs9ehs89HPqN0X6jv7Mj3xFbFzNIGTD0jF8CTKbTLcHI0IpkYVtobLk2WnlFXZC/cSegc9JPUNdRw7PKkFLfMrnQ6Zwxsnoza9Eqlfut4HLzCwOs0zCwYbjWDt4yuk6jfWnXr5iAIFM92+Hdom6Yzz7YqysY4ZdcCLLPLZk5xUtT1UDdujqxtClCkUSyuUqCqGCEkwMktBGU0KkPgWLUfqZvs+8QvA+YgxeNqVZRWubFaDkCCfCBDLmOuDwrQryHbPG9UdVY9uyaEtVnc5BZ8tj2Op90eleiOoRQtRNa9vz3Q4mfR//9k=" id="homeimg" />
                    <img src="https://data.whicdn.com/images/238285581/original.gif" id="homeimg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScpYILq-JeKWFH6M_PC_gKSVtJLfi99nha8fiY-mW5STq6VXpy" id="homeimg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0LaG-CjpMTpF0B-0_IVBNSCRhFMuyF32b3VmoeROgou06DDMf" id="homeimg" />
                    <img src="https://i.giphy.com/8IZCR0wzEIQms.gif" id="homeimg" />
                    <img src="https://vignette.wikia.nocookie.net/starwars/images/4/45/RogueOne-DigiBook.jpg/revision/latest/top-crop/width/300/height/300?cb=20180402205606" id="homeimg" />
                    <img src="https://i.pinimg.com/originals/a9/c8/8d/a9c88d11379fa17ca6b449ec5ce0f60c.jpg" id="homeimg" />
                    <img src="https://66.media.tumblr.com/afd3ca95335d82dc03d3dd9165145a63/ca696c8b899cfcb1-c8/s500x750/882f1d461e7cc2d128db69147ea10391a6a6dca4.gifv" id="homeimg" />
                    <img src="https://as.com/meristation/imagenes/2019/12/04/noticias/1575491867_446937_1575492034_noticia_normal.jpg" id="homeimg" />
                    <img src="https://melbournesymphonyorchestra-assets.s3.amazonaws.com/assets/Image/4365.jpg" id="homeimg" />

                </div>
            </div>
            {/* 
            RECICLED CODE
            <div className="row">
                {
                    $("div.blog-post").slice(0, 4).show();
          $("#load-more-post").on('click', function (e) {
                    e.preventDefault();
             $("div.blog-post:hidden").slice(0, 1).slideDown(300);
             if ($("div.blog-post:hidden").length == 0) {
                    $('#post-end-message').html('<div class="end">End</div>').fadeIn(800);
             $("#load-more-post").fadeOut(100);
              }
             });
                <div class="col-md-12 text-center">
                    <a href="javascript:void(0)" id="load-more-post" class="load-more-button">Load</a>
                    <div id="post-end-message"></div>
                </div>
                }
            </div> */}


            {/* 
            
            MY ADVANCE
            <div className="row">
                {
                    $("img#homeimg").slice(0, 4).show();
                    $("#load-more-post").on('click', function (e) {
                    e.preventDefault();
                       $("img#homeimg:hidden").slice(0, 1).slideDown(300);
                       if ($("img#homeimg:hidden").length == 0) {
                    $('#post-end-message').html('<div class="end">End</div>').fadeIn(800);
                       $("#load-more-post").fadeOut(100);
                        }
                       });
                <div className="col-md-12 text-center">
                    <a href="javascript:void(0)" id="load-more-post" className="load-more-button">Load</a>
                    <div id="post-end-message"></div>
                </div>
                }
            </div> */}
        </>
    )
}

export default Home;
// export default injectContext(Home);