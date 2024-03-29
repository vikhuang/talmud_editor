import React, { useEffect } from "react";
import Editor from "./draft";

import { Essay3, Essay4 } from "./essay-second";

export const sampleContent =  'Quelle cause requiert une idée ? Ou dites-moi ce que c’est qu’idée ? c’est donc la chose pensée, en tant qu’elle est objectivement dans l’entendement. Mais qu’est-ce que qu’être objectivement dans l’entendement ? si je l’ai bien appris, c’est terminer à la façon d’un objet l’acte de l’entendement, ce qui n’est qu’une dénomination extérieure, et qui n’ajoute rien de réel à la chose. [...] Pourquoi donc recherche-je la cause d’une chose, qui actuellement n’est point, qui n’est qu’une simple dénomination et un pur néant ? [...] L’influence que donne une cause est réelle et actuelle ; ce qui actuellement n’est point, ne la peut pas recevoir, et partant ne peut pas dépendre ni procéder d’aucune véritable cause, tant s’en faut qu’il en requiert. Donc j’ai des idées, mais il n’y a point de causes de ces idées ; tant s’en faut qu’il y en ait une plus grande que moi et infinie. [...] Il y a ici de l’équivoque ; car si ce mot Rien est la même chose que n’être pas actuellement, en effet ce n’est rien, parce qu’elle n’est pas actuellement, et ainsi elle vient du néant, c’est à dire qu’elle n’a point de cause. Mais se ce mot Rien dit quelque chose de feint par l’esprit, qu’ils appellent vulgairement Être de raison, ce n’est pas un Rien mais quelque chose de réel, qui est conçue distinctement. Et néanmoins, parce qu’elle est seulement conçue, et qu’actuellement elle n’est pas, elle peut à la vérité être conçue'


export const Essay5 = (props) => {
    const onFocusedBoolean = (props.onFocused === 4);
    // useEffect(() => {
    //     console.log(onFocusedBoolean);
    // }, [onFocusedBoolean]);

    return(
        <div className='essay4'>
            <div className='second_wrapper_right' style={{shapeOutside: `inset(${15}% ${0}px ${0}% ${0}px)`}}> 
                <Essay3 onFocused={props.onFocused} shapeHeight={props.shapeHeight}/>
            </div>
        <Editor essayNo={{no: 4, layer: 3, align: 'left'}} 
            onFocused={onFocusedBoolean}/>
      </div>
    );
}

export const Essay6 = (props) => {
    const onFocusedBoolean = (props.onFocused === 5);
    return(
        <div className='essay4'>
            <div className='second_wrapper_left' style={{shapeOutside: `inset(${15}% ${0}px ${0}% ${0}px)`}}> 
                <Essay4 onFocused={props.onFocused} shapeHeight={props.shapeHeight} /> 
            </div>
        <Editor essayNo={{no: 5, layer: 3, align: 'right'}} 
            onFocused={onFocusedBoolean}/>
      </div>
    );    
}




