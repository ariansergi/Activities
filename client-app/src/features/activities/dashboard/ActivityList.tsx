import { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";


export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore;
    const [target, setTarget] = useState("");
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity=> (
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as="a">{activity.title}</ItemHeader>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button floated="right" content="View" color="blue" onClick={()=>activityStore.selectActivity(activity.id)}/>
                                <Button name={activity.id} loading={loading && target===activity.id} floated="right" content="Delete" color="red" onClick={(e)=>handleActivityDelete(e,activity.id)}/>
                                <Label basic content={activity.category}/>
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )

})