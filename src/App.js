import './App.css';
import Editor from './draft';


function App() {
  
  return (
    <div className="App">
      <div className='Header'>
        <p className='Header_loveSec'>
          For Michael
        </p>
        <div className='Header_title'>
          Talmud 
          <div className='Header_title_sub'> תַּלְמוּד‎ </div>
          Layout Generator
        </div>
      </div>
      <div className='preview'>
        <span className='essay3'>
          Quelle cause requiert une idée ? Ou dites-moi ce que c’est qu’idée ? c’est donc la chose pensée, en tant qu’elle est objectivement dans l’entendement. Mais qu’est-ce que qu’être objectivement dans l’entendement ? si je l’ai bien appris, c’est terminer à la façon d’un objet l’acte de l’entendement, ce qui n’est qu’une dénomination extérieure, et qui n’ajoute rien de réel à la chose. [...] Pourquoi donc recherche-je la cause d’une chose, qui actuellement n’est point, qui n’est qu’une simple dénomination et un pur néant ? [...] L’influence que donne une cause est réelle et actuelle ; ce qui actuellement n’est point, ne la peut pas recevoir, et partant ne peut pas dépendre ni procéder d’aucune véritable cause, tant s’en faut qu’il en requiert. Donc j’ai des idées, mais il n’y a point de causes de ces idées ; tant s’en faut qu’il y en ait une plus grande que moi et infinie. [...] Il y a ici de l’équivoque ; car si ce mot Rien est la même chose que n’être pas actuellement, en effet ce n’est rien, parce qu’elle n’est pas actuellement, et ainsi elle vient du néant, c’est à dire qu’elle n’a point de cause. Mais se ce mot Rien dit quelque chose de feint par l’esprit, qu’ils appellent vulgairement Être de raison, ce n’est pas un Rien mais quelque chose de réel, qui est conçue distinctement. Et néanmoins, parce qu’elle est seulement conçue, et qu’actuellement elle n’est pas, elle peut à la vérité être conçue mais elle ne peut aucunement être causée, ou mise hors de l’entendement. (O1, p. 218-219)
        </span>
        <span className='essay1_wrpper'>
          
        <div className='essay2'>
          <div className='essay1'>
            qu’elle emprunte à ma pensée dont elle est un mode ; mas que telle idée contienne telle ou telle réalité objective plutôt qu’une autre, qu’elle emprunte à ma pensée dont elle est un mode ; mas que telle idée contienne telle ou telle réalité objective plutôt qu’une autre, cela, assurément, elle doit le tenir de quelque cause dans laquelle il y ait pour le moins autant de réalité formelle qu’elle en contient elle- même d’objective. En effet , si nous posons qu’il se rencontre dans l’idée quelque chose qui n’a pas été dans sa cause, elle le tient donc du néant ; or, pour imparfait que soit ce mode d’être par lequel une chose est à titre d’objet dans l’entendement par l’entremise d’une idée, il est pourtant sûr que ce n’est pas rien du tout, et par conséquent cela ne saurait provenir du néant.
          </div>
          Quelle cause requiert une idée ? Ou dites-moi ce que c’est qu’idée ? c’est donc la chose pensée, en tant qu’elle est objectivement dans l’entendement. Mais qu’est-ce que qu’être objectivement dans l’entendement ? si je l’ai bien appris, c’est terminer à la façon d’un objet l’acte de l’entendement, ce qui n’est qu’une dénomination extérieure, et qui n’ajoute rien de réel à la chose. [...] Pourquoi donc recherche-je la cause d’une chose, qui actuellement n’est point, qui n’est qu’une simple dénomination et un pur néant ? [...] L’influence que donne une cause est réelle et actuelle ; ce qui actuellement n’est point, ne la peut pas recevoir, et partant ne peut pas dépendre ni procéder d’aucune véritable cause, tant s’en faut qu’il en requiert. Donc j’ai des idées, mais il n’y a point de causes de ces idées ; tant s’en faut qu’il y en ait une plus grande que moi et infinie. [...] Il y a ici de l’équivoque ; car si ce mot Rien est la même chose que n’être pas actuellement, en effet ce n’est rien, parce qu’elle n’est pas actuellement, et ainsi elle vient du néant, c’est à dire qu’elle n’a point de cause. Mais se ce mot Rien dit quelque chose de feint par l’esprit, qu’ils appellent vulgairement Être de raison, ce n’est pas un Rien mais quelque chose de réel, qui est conçue distinctement. Et néanmoins, parce qu’elle est seulement conçue, et qu’actuellement elle n’est pas, elle peut à la vérité être conçue mais elle ne peut aucunement être causée, ou mise hors de l’entendement. (O1, p. 218-219)
          
          
          </div>
        </span>
        
      </div>
      <div className='draftArea'>
          <Editor />
      </div>
    </div>
  );
}

export default App;
