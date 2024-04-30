import { Activity } from "../../../app/models/activity";
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, Label, Segment } from "semantic-ui-react";

interface Props {
    activities: Activity[]
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}
export default function ActivityList({activities,selectActivity,deleteActivity}: Props) {

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity=> (
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as="a">{activity.title}</ItemHeader>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button floated="right" content="View" color="blue" onClick={()=>selectActivity(activity.id)}/>
                                <Button floated="right" content="Delete" color="red" onClick={()=>deleteActivity(activity.id)}/>
                                <Label basic content={activity.category}/>
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )

}