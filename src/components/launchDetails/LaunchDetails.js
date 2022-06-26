export default function LaunchDetails({item}) {

    return (
        <div>
            {item.mission_name} {item.launch_year} {item.links.mission_patch_small}
        </div>
    );
}