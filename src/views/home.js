import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import Carousel from '../components/carousel';
import Collage from '../components/collage';

const Home = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    const [state, setState] = useState({
        galery: [
            {
                id: 1,
                image: 'data:image/jpeg;base64,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',
                title: "First Slide",
                description: "This is a description for the first slide."
            },
            {
                id: 2,
                image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUXGBUYFxgXFxcVFRUVFxYXFxcYGBUaHSggGB0lHRYXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAIEBhQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADgQAAEDAgQDBgUDBAEFAAAAAAEAAhEDIQQSMUEFUWETInGBkbEUMqHR8AZCwSNS4fFyBxVTYpL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAgEDBAX/xAAhEQEBAAICAwEBAAMAAAAAAAAAAQIREiEDEzFBUSKR8P/aAAwDAQACEQMRAD8A7M1QQIKr+IXMta4mAb6awtDA4SoC3MTlncyPJfTvjk/Xg52tKrXsg6jkdVwgPT7IZ+CuADr9FONhZQ5qSEmvhEv4c4aEFU1MG8aj+Ve4zVVmooEpyw8j6JlumEEykDCZaw7SjcJU6oWjQc6coJi55AdSrqVB8wGk9QCRHOVN0qba9GTcOA5pqhd+4CPy6AY8tKMbUJG642adJUKGFeXlwPd5bytVlhELPZXyaqPxpzzdZZa2WRLFcLaanaQL2MdNPZaVAMAsAg6mLkaqlmIAEzKmy2dtlkvSfGw17YI08lbw9/cE+Erm8dxOpmLWhuaGlgJscxgFwiWix9NrwZg8fmEjzG3iOh1Wybmi9XddHVqAidUP21tIIVGHY50ftadzrHTn7K+q1jXEAXA8Z5C+nip1J03e0akG9+oUaTbkgqrieLimQCJOwEeayKXFSBEwY1G4v6FdMcLYi5SV0Lq+xP2RT3scwsIEERGy4qpxB0yD5HRa+E4wxwAPcI5mx8CmXhs7MfJKyeKcOdSe59KQ3luJ2QeR1QFxAEwTbXX7rp81GoHFtQTGjrX8HKOG4e4gZwIjxnWNF0nk1O0XDd6Z/wCmqTm1CIsTrt+T7Lqm02gQEJh8Nkb5p69a0rjneWW3XGcYrxFY87JMr21+6oqvlt1mdqQZmYVTDablpq16rXNILZWU/Aip3ibEFt+f2sk/EbjzV1KuC2LTzVyXH4i2X6Eq/pIPbmY642P+FiY7g1SkTIMdNF1nD8RkzAm5JP5yUMRjm1HZHAnnI7vSearHyZy/2FmOmJw7grqlKQZBuOcrQ4VwNoDg9s+OvqFp4XDGi2GzBvofwIptQZeu6nLy5XemzCfrhOP4AUn9yQ3lyWUXu5ldnisO2o92YWB3Gyx+M0KbDlaCOttV6PHn8lc7AOEqOEFwJabT15eK2BQaWF4kRqNx1t+WWXSqHKGi4E69dbeSswj3ktaBAzW26kqsogjXbzT1KoG6tqcNzvd2YmGtNj0163Cyq9AtJadQtmqaE1MQOapGLv0Q2VOKc2AJJ0AuT4BXqMbOG4laAYhF0eIZhIKyavBa7QD2bjNob3iDyIGiv4dhnsqZSwgxobW5yuVmOtxXcHPrFOt3DYYES5jZ6BJcPbJ+L9dc+0wRaVqYDEyYKFoMM2FlJ9R2gg/nVVl30TptVKgshKtS/ghGVSPmED1+oSr1Ig7Fc5jpVy2K+LGhuradUOP8LKZXuiMKXEzoB+QtuJMm/TaA2wQGLLTsPRJlQxBMoKrXuQueOPa8suicxv8Aai8HwrN3nAhu0anl4Dqq8HQnvO8hz6notP4gzr76C33W5ZX5GYyfqNVrQ0MAgaW05/wq6NmOMmRO/IGAqy/NG1x9RH3V1Fsk7AzHkdSpUzBROm+3hsjcBpfVXljHWFzaCNes7bLHGPOg2JHoq7yT1iPxtUalCCuHSARPLdAcQeS0/use7aXWsJNrmyxOyeAHBpzsaAMpIySZhpMtdY6En5uazerpUx3NumfUhNRa95hu1ydAPFNw6k+sA4jKOZ38AtljGMbHI35uKu5SfETG7ZTeCy7vBgzGXZf3wIbmB1A2GgN9UfgeE06As0OdJi1hvAGg/wAq0vJIOlvQK7tFyrpKcPI3Enc7BUmtZx8fU/YKgtzOv78lHF1GgZRLfqPE7+62Ys2z8Y+xPPmsp3Pf2R2IvuD4fYwULlXpx6jhl9VhOURSwtR1w0+w9TZRrYR7fmafHb1CrcTqhij8BxWpSt8zf7Tt4HZCFNulkvVJbPjpqfGqbxc5T1++ihWaSO64Hldc5CVNxFwY+i5+qT4v2W/WvVqPaLiQgqmIlWYfEHclWudJ2KTpn0D2hUmVYWlTwpcbt/hXN4SwGXExyH3S54kwqnhmZ7rC27uQ+/RbwqBomwGg5lBUyA3K0ZWj6n+Sot7zugsuOX+VdseoMbiA7YhRyjXSfr5KskTA6JzVUaVtWQxpuLG4MTdYHHMNLhkHd3jpOy2sS6Ra/wCarLrYmHNbPecTEbQCZ9PddvH1duWffTn20SNZGWLdTp9JRVBwgwO9oPARPhrHmjsdRc8GLmb9VlkEdNl6ZeTjeheCxPZ1SdjLT53H1CH4kM7pE7lUvWtgcEJzZp6dNpS6x7Ju9MXD8PfUcGsaTPoBzJ2C63hnDadAW7zz+4jWbQP7QkyvAgAAb9VJ9cH/ACVxzzyy6/HXGSLm8xqoPguuJgRJ9vBRaeWu/KI19lZLBrHTfzXNWzMrRpYJKuo4OMhv54Apk1GboR1VQB3VTSnB0XRK5zSSDHgoYgujS0JdsdinY5YK8IzNsB1WoXgADb0Q7XgBLMTqsvbZ0vNSYAsFFuGDnTsNevRVtH5zKNpwBHqVN6+K+rmC2n+lKnTzGNL7EDyuhjULrD8HNGYYwDABIBudB1jdc70udpVaVNtpNtct79Sbf7UKdUCwFzub2nlCrw8G+t4kbOj67oqlQk3BHIbxzOwWVUUPc4EZBcjvCL9COR8bLmn4V9Ooc7S0E6kWldv2IBzaH85KLWNcIIkcj9VuPk4syw244sHNGYbBNiX36ff7LfHC6UyGQf8AkfwK5uHYNAJ697yEqr5d/EzxsplS3Lkqiwm9zfa8+ey1apmwb6gX56qg1XPyhsjKbics+QUzJugWe876eCk6rreOqKqUQ6YADhoB/PNc5xTBPLgSYhsAQbkm5zxYABpgAzediG/42Y/1o0q42MzuLg+CCxTpQ+DwZaTBN9paANzAFjJJuQDvuiKzDoRHjZdcK5Z6+bAOKIoUJgn0+/IKWQDZPSuulqJGjRrnQbbnf7ItrpEx5IGmMohWdtb2XGx0lU4rDMn5R4iRB9kA/CASQfARr5o6sSVEMadHCeThHobj1hdJbE8dspRC0MRhxHLwgj1FkGKTrkAmNYEwukqLjSY+CjcMATrfXSVn5TyRFB0LMmRpOri17q3D5nmNGjfVAUgXGBr7BbVOgWCBf+7b69fsuOWo7YdrBTaPIiJdc20/0FHNTYSM0m50MRqPokX3+UHxn2QdeibkgCSIHTQb/k9FzjpRfxljlAAP+tVVVMNOs2A5JshtDY0mRYeMa3Knh6Ug6+Mddk+DKr4d8EkEgAmWkiw5N5/l1gVMSKdTtPmI1n5gDy6wu+7ARB0MdJ1JEXQ9fBUnfOwOaIgFoMbSDMjRVjnpNxYbKwgEGQYIjko4qDFh0MCZW5/22i1rQ2lIEWDiIG25n1RdNpBIbTYLwDAFlXtn4j11wb6JzBouTp1WzRoOY0Ag2FzBXSCp3hIGbeOShUxUGx8OR8CtvmuXWieLX657tE1N91qfD3MtmRPeMweg5dEPUwNyGC42JEbeYWzKMuNQZWHuoOeSZVLmub8zS328iourwFWk7XV8Tli4HRJYtetLiSkrmCOY2rLTB1/jRRFRH8SwWYkxBE38ovzWNUa5hgz+cua545bdbiJzqbHoOnWnWyuBVJGMep5kI1W07+Clo7DmxP5Cm4zZUBy0+G4Se+7TYc+qi3XapNp4HCuIk789gi6lCGkC0/XoiGqrE3gLjvddtaiGGYGiAOl9Ua0oGnY2v4/dENqLKRfmTB5jSPNQzJB6lu03GbKDglKad1oiaf8AE3N7aICpTLXGNOf8H82WgENV1voqjKabdY81XVhzS0wY9Qeij+6yqqGT19/FbIlmYqkGgmf9c1GliHDeRyNx6FT4hjWXFza+UTB01mFn4V8iRp9R/hdpdztzyxF1HSdAPDRW0qsWsehEhD5kxcq0gaKzIkgg9DI9D90OapPRUEq1j2aOBHVp/g/4Wa0bOah5qhzlXxKu2m3MHZh17sf8p+6yH8XDhUyvGZrC6ACJsdCdxb10TlIqY3KbbL8S1olxAVLceybPjrdv1KAx7+4C25mfoQPdA49xbTcSJtG9p3U+xfrdMa5OoB6nX11Uc0kBomdAuc/TdRxeWSS0jujUTI09V6HwvhoYJcJcdd46BVc5JtNxtuj4HBdm2TcnWPYfdXi5sB05czbZFi2hhI+A8Y+y89u3aSSB/hba33M21+xKatQzAf8ArOup/ICLb1/PJOR4LNt0EYANLTqrACbXidZ26pqzNxr6IDFcZpU7Fwcb91sF0jnFh5wt+paeWBYW68lGrUAExJvA5+cLl6n6vOaOwET/AOSD6ZVr8J4tRxE5PmbZzXCHNvvsfEFONn02LpYiQJaBrvMDqPX0SL/7RrO/jHTVWwFU+CLj6fhQCsYYix2jKLyPAe6f4UjSBuZ0kb6K85rnT+PAqoTJMzaOUmdQqYT6RIvsbX1jrzVQzNMEEjVEUmazeeesdVGswuJG3ikrFBqga6bzoVnYzh4ddpy6yNR7ytAtgaab81U+9+Wsq8br4mzblsTQcwwfXYpl0tRkxZJdp5XL1tx4tt5oHGYRjhGW/PQI/sio1KRheSXT1WOSxPCjNteR+6oFJzbOBHXb1XUuw53EqmrhTyXWeRFxYLGEq9o5I84FCtwlWnU7RkG0R03t/lbzTxaGA4do5/k37/Za4XIUKlWn2gghr5mQeuh06I3gOOLGdmWuccxyxGh1HrPqueUtXNR0gKreVNNC5qVsTgKYYk4QCTYC58At2E5JoQWE4xRqFwaXktMGKVV2ulw0o+u5rWl5kgD81WN0aZU0Lg+J06jqjWtd/TIBORx26DWZt4HQompiwOt7oaLsyoVMMTvCKCeFm26A/B9VkcYxTWOFIEmo6AI2J0Gmv0Gq1qXFaTqj6YDy5kZoY8geYCNFNk5sozREwM0cp1W8tfWaea4gOJNPKQTHzWLZ/wDXURzhTo4aqycrXuJgEtpuM7ax4lelgpiFXtZwcXhsDUe3M1jhzBtcWsTAPknfw+qNWO8r+y7OFEtWzy1nrjh3UXDVpHiCFGF3GVQfhWu1a0+ICr3J9biS3aFRWY1rHEtEZSSAB3hGkbruTw6n/wCNvosT9U4enTo91sOLhEEzG8D09VvtjPXXEN4a+qMk5Y+bU94mYA2AuByACWL/AE87K54dmDYLu5FpE96bWXZfpikxzXse1hqNcTEknKYgm/OR6c1pcfGXDPAa0AgCNBc9FPKfF6u2F+i+B02U2V9akPaDsG5yIHM93XqV1QWT+jsQH4cNtmY5weBMy4l8wSdc3hIMLdEKLVaVBqsFNTBUg1Ts0qcwKLqavNNIUk23TK4tgDWpmnmLJ3En1bIkLjOM8Cfhm03Cp2gNQNjIGRLXbgkxANr+S7fh2L7TM02c0mxi7ZMG3LTy6of9SYMvom3yua4eVvYlXMtXSbHntalVDTWNJwp2hxNtYHXUrZ/6e4J+apVsGkZdbl0tdpyg6rS4tRzYCi2CGk088G4aA4m8HcLT4JlZVr02gAZg9txdpG3QW/8AoKrl0zTRLPBRFMoqEzjC57boO4FRazp9Fc2sJi/orluzQMhRIRsdFA0uibNM6s2bKrItCvRgTBKEogzDvIx9CqmSeId1KUloCh0BSW8mcRhYm7NHdkEuzC4bd9AeyTdmtDswn7MJyOLNNJV1MMSDlgHYxMHwV9LAEYh9WRlc1rQMztWzqIiO8bfex1SkCIMj/iYPrqnI4uF/T2Fr1XV8+IcMlQshjaRE6ky5ht0gLpcPgy0RJJ3JABPjlAHoAjMDwujSksaQSACc73TG5lxk9dUWA0f5v7rbkcWHxSm8UiWh0yyMsz87ZiJOk7FCcDwWIcalSo6o0OMNY5oa4AaOILdYgWtbddRnTZgs5HGA24V1vz2QWEc5rZxD2MJJgGxEuOUEzB5COW5lbOZV1KbHfM1pnWQDPqs2agDhfCW0w8h+YVHmpYAAZg0QIJkd1LizGta1paXB7msMODTc7ExeY3C0WuaBAgDpZOagRuoym8HDcgoudTa1znOAdJcXDcuDp316Rorq1NzXCKTXMMCwBcDNyemmg5o7tQl2wTskkMxltPomdRHIeiXbhMa6BuwTGhy905xCicQmjUMKY/u+qkKJUDiFXUeHAtcAQdQRIPiDqt7Lpe1s6EcvNRrUnQcrmh2xcC4T1AI90FhafZjK02km4vfrMRsLaAK81kYjhcxac9nZnCzSLAmIkRomw9Ls80ue+TPeuQIDYEDp9VLtk3bLTpXV/qtIa+pTiNAGm4tIcJG4i2hQ2N4S2qwCrncWtgZXNB2nK7K3WBqiAACXXkmT3nQTAGkxoB6KZqoAeF8NpNe6swODpe0yQRqMwgCLObHTKr+JcNp1gQ8a6kQCY0k9JPqVJoaLhrQegA1uUi5awJwfhNLDF5YXuzxObLtOkAcytLteiHlKUBAqA7KQcEI8BwINwdQpF6A1hG7iPJWVKjcpDbnaeaz86bOs03auhw0SXggPkkcr3RzaGdhZUvIg8j1HJDZ04qLe2LmcLpCmKeSWAyASTBuefUqyng6bTmDGgxEwJgWiddkMKp5p+1PNZ2dDoHRM4goPteqXaLNNXABpCqdxSmNXJF8rmv1Bw9w/qMIgSXS6L8uWghCOwbVBEjQp+0XM4Hj9MNpMcHyezaCGOcwFwJGZzZygQZJgCFPhP6lpVu0/Z2boOa8j+6RoLboaro+0S7QISnWBAIIIOhBkHzUs/VATnCdDZ0k0KP8AuCXxxWVmSzK9Rm2p8eVmcQ/VDKWcEy5sW0BcRIGY+vQA8kNXx7WNDvmLvkaNahtEchJuTouOp4Z2Mq5BJZ3u0qgQCC7vllzOY91pOjZ1WajY77gnHjXoMq2GbNoZHdc5sjxifNG/GnmuO/TmIBrV6bABToinTEaTNQkDoBH1XQSmmNH40803xh5rMNdocG5hmNw2RmIGsDUqcrdQaHxZ5pvizzQEpSmgf8Ueab4rqgcycFNA34nqn+I6oGU8poGfEJfEIOUpTQM7ZN26ElPmTQK7ZIVkJn6pB/VNAvtk3aobMnlNAjtUhVVEpSgvNRN2iplOgtzpZ1UkgtzJi5QhPlQSLkpUHGFAlBdKUqmU8oLsyUqsBKUEgO9NriDa5jS89T6qZcqgU8oJ0nWFyfEQfRSzBVZksyC0PCRqgamJsPFVynCCb6kBY3GX1nup0qTGhznBz3l7WZGW/pteQ7vG8lgnqFrkBLKFGWO6vHLU1HGNoOw+dtapUz1JAY14qdk2TrUnukltiSdhlkLQ4dw5j3EVRmHftlDndpbLLmnK+GyDn7xnaCF0YYOWuvVMKLYAAFtLWHgnFm3E8E4s+m99OlTY6vP9Si09kwdmIOVrm/NqdZtodV2uD4g2oLS07tcC1wN9jrob9FI0hIduNDuPApqmHa7W95ve6Yyz63Ky/BOZJD06MaekkgeA28klSATRNgp1qZAkG4ImdD06KXbCDFjtbdZHF/iKjOyp5WgtAc8mCTuABMAiVojVaHscZGaoHNz6Cm27SQDsBYc83Uki1sezC0Q2mCWsa4udpJaJa3qXOMWsPDXRfgAWtZo393XS0b6RPL6W4zCseHAsDgWZQ06E3i/7TMHNrYcrhz//AE7on4Z1Q3NSo93kIb7h3qupaJ0XOcE4FWpUwx1YtAk5WOcRJMuAmLTKJZw2qcRVquIbTdZtOk97T8zjmqOgZnQQ3wAT90MrieLwnxlKv8Q01Kb+zLMwytzB1Nzj1AJ6DkdV1vatmAQfMLHxXAA97X5xDXNcGuptfOXYugOPmToJmBGmaDrDtCANg1gHkMphcvBMpLy/v/f7X5LLrS7MnUKdPm4nxj+AFYuyDZU8JJIFCdMlKCYhOIUE8rBOyaFGUiUCcwKl2HG1ldKZBUA4KQcppLQwcnzJoShBKU8qCdBIOT5lBKVgsDlLOqZSlBfmTQOSqlPmQWdmExp9VAOThyBFhTSVMOSzIIBycOTkBRyoJApKKSCcpKMp5QSSlRlPKCQKlmUJSlBYHKQcqSUwqHksBGZJVNd5JIAUk6SoWN1HgfZQCSSB1TV+ceSSSC5IJJIHSCSSBBJJJA40TJJIEnTJIHTJJIEE6ZJA6SZJA6RSSWBJJJLQkkkkCSSSQJOkkgSdJJAlIJJLAkgnSQMUySSBBJOkgScJJIJJBMkgdOkkgcJJJLB//9k=',
                title: "Second Slide",
                description: "This is a description for the second slide."
            },
            {
                id: 3,
                image: 'data:image/jpeg;base64,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',
                title: "Third Slide",
                description: "This is a description for the third slide."
            }
        ]
    })

    const [multiplicador, setMultiplicador] = useState(1)
    function mapcollage() {
        let x = 8 * multiplicador;
        let y = [];
        for (let i = 0; i < x; i++) {
            if (Collage[i] !== undefined)
                y.push(<img src={Collage[i]} id="homeimg" />)

        }
        return y;
    }

    return (
        <>
            <Carousel slide={state.galery} />
            <div className="row">
                <hr width="1050px" height="5px" color="gray"></hr>
                <marquee className="firsttitle"> COLLAGE - COLLAGE - COLLAGE - COLLAGE - COLLAGE - COLLAGE - COLLAGE - COLLAGE</marquee>
                <hr width="1050px" height="5px" color="gray"></hr>
                <div className="col-12 mb-3 ml-3">
                    {
                        mapcollage()
                    }
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                {
                    Collage.length > 8 * multiplicador ? (<div className="btn btn-dark mb-4" onClick={() => setMultiplicador(multiplicador + 1)}>More...</div>) : null
                }
            </div>

        </>
    )
}

export default Home;
