import SectionTitles from "../../hooks/SectionTitles";


const HomeSchooling = () => {
    return (
        <div>
            <SectionTitles title={"HomeSchooling"} subtitle={"All about home schooling"}/>
            <div className="grid grid-cols-2 gap-5">
                
                <div>
                    texts to be updated regarding the available resources on HomeSchooling
                </div>
                <div><iframe width="560" height="315" src="https://www.youtube.com/embed/lzsZP9o7SlI?si=SmdQFvWiBKgow7HV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

            </div>
        </div>
    );
};

export default HomeSchooling;